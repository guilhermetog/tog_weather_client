import Map from "ol/map"
import XYZ from "ol/source/xyz"
import TileLayer from "ol/layer/tile"
import View from "ol/view"
import Feature from "ol/feature"
import Geolocation from "ol/geolocation"
import Point from "ol/geom/point"
import {default as LayerVector} from "ol/layer/vector"
import {default as SourceVector} from "ol/source/vector"
import * as Weather from "./WeatherAPI"

const GOOGLE_API= "AIzaSyBJ3JR4k3nNtvyMpSqetyVxSXMycseWuMc"

function OMap(id){

    this.view = new View({
        center: [0, 0],
        zoom: 2,
        projection: 'EPSG:4326'
    })

    this.pointer = new SourceVector()

    this.map = new Map({
        target: id,
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
                })
            }),
            new LayerVector({
                source: this.pointer
            })
    
        ],
        view:this.view 
    })

    this.location = new Geolocation({
        projection: this.map.getView().getProjection(),
        tracking: true
    })  

    setTimeout(()=>{
        this.pointer.clear()
        this.pointer.addFeature(new Feature({geometry:new Point(this.location.getPosition())}))
        this.view.setCenter(this.location.getPosition())
        this.view.setZoom(7)
    },1000)


    this.changePoint = (evt)=>{
        this.pointer.clear()
        this.pointer.addFeature(new Feature({geometry:new Point(evt)})) 
        this.view.setCenter(evt)
        this.view.setZoom(7)
        return evt
    }

    return {
        map: this.map,
        changePoint: this.changePoint,
        getCity: this.getCity
    }

}


export const getCity = async (location,callback)=>{
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?`+
            `latlng=${location[1]},${location[0]}&`+
            `language=pt-BR&`+
            `result_type=administrative_area_level_2&`+
            `location_type=APPROXIMATE&`+
            `key=${GOOGLE_API}`)
    .then((response)=>{
        if(response.status !== 200) return false
        return response.json()
    })
    .then((data)=>{
        if(data.results[0]){
            var address = data.results[0].address_components
            return{
                city: address[0].short_name,
                state: address[1].short_name,
                country: address[2].short_name
            }
        }else{
            return {}
        }
    })
    .then((address)=>{
        if(address.city){
            Weather.getCurrentWeather(address,(resposta)=>{
                callback(resposta)
            })
        }
    })
}

export const getLocation =  (city) =>{
    return new Promise((resolve, reject)=>
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API}`)
    .then((response)=>{
        if(response.status !== 200) return false
        return response.json()
    })
    .then((data)=>{
        var address = data.results[0].formatted_address.split(',')
        var location = data.results[0].geometry.location
        resolve ({
            city: address[0],
            state: address[1],
            country: address[2],
            lat: location.lng,
            long: location.lat
        })
    }))
}

export default OMap