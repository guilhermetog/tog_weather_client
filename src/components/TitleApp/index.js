import React from "react"
import Logo from './logo_tog_weather.js'
import "./TitleApp.css"

const TitleApp =()=>{
    return(
    <div className="title_app">
        <div className="title-container">
            <Logo>Weather</Logo>    
            <p className="title-container__subtitle text_minimized ">Saiba o tempo em qualquer lugar!</p>
        </div>
    </div>
    )
}



export default TitleApp