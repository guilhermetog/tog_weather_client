import React, {Component} from "react"
import "./DisplayWeatherNow.css"

class DisplayWeatherNow extends Component{
    render(){
        const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        const {temp,max_temp,min_temp,weather} = this.props.weather
        const {city, state, country} = this.props.location
        const date = new Date()
        const current_month = month[date.getMonth()]
        const day = date.getDate();
        const year = date.getFullYear();

        return(
            <div className="weather_now">
                <p className="title_city">{city} - {state}, {country}</p>
                <p className="title_date">{day + " de " + current_month + " de " + year}</p>
                <div className="horizontal_control">
                    <div className="temp">{temp}</div>
                    <div>
                        <div className="icon_label">ºC</div>
                        <div className={`weather_icon ${weather}`}></div>
                    </div>
                    <div className="min_max_icon"></div>
                    <div>
                        <div className="max_temp">{max_temp}ºC</div>
                        <div className="min_temp">{min_temp}ºC</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default DisplayWeatherNow