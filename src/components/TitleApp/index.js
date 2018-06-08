import React, {Component} from "react"
import "./TitleApp.css"

class TitleApp extends Component{
    state = {

    }

    minimize(){

    }

    render(){
        return(
        <div className="title_app">
                <div className="title-container__title"></div>
                <p className="title-container__subtitle text_minimized ">Saiba o tempo em qualquer lugar!</p>
        </div>)
    }
}



export default TitleApp