import React, {Component} from "react"
import PropTypes from "prop-types"
import "./Map.css"
import OMap,{getCity,getLocation}from "../../apis/MapAPI"

class OpenMap extends Component{

    state ={
        lat: 0,
        long: 0,
    }

    changePoint = (evt) =>{
        this.setState({
            lat: evt.coordinate[0],
            long: evt.coordinate[1]
        })

        this.updateMap()
    }

    lookForCity = (city) =>{
        getLocation(city)
        .then((location)=>{
            this.setState({
                lat: location.lat,
                long: location.long
            })
            this.updateMap()
        })
      
    }

    updateMap = () =>{
        var location = this.map.changePoint([this.state.lat,this.state.long])
        getCity(location,(data)=>{
            this.context.store.dispatch({type:"WEATHER_CHANGED",data})
        })
    }

    componentDidMount(){
        this.map = new OMap('map',this.changePoint)
    }

    render(){
     return(
        <div className="map-container">
            <div className="map" id="map"></div>
        </div>
     )
    }
}

OpenMap.contextTypes = {
    store: PropTypes.object.isRequired
}

export default OpenMap