import React from "react"

const Weather = props =>{
    return(
        <div className="weather__info">
            {props.city && props.country && <p><span className="weather__key">Localização: </span>
                        <span className="weather__value">{props.city},{props.country}</span></p>}
            {props.country && <p><span className="weather__key">Temperatura: </span>
                                 <span className="weather__value">{props.temperature}º</span></p>}
            {props.humidity && <p><span className="weather__key">Humidade: </span>
                                 <span className="weather__value">{props.humidity}kg/m³</span></p>}
            {props.description && <p><span className="weather__key">Condições: </span>
                                <span className="weather__value">{props.description}</span></p>}
            {props.error && <p><span className="weather__error">{props.error}</span></p>}
        </div>
    )
}

export default Weather