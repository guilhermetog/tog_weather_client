import React, {Component} from "react"
import "./Display.css"

class Display extends Component{
    render(){
        return(
            <div className={`display-container disp-${this.props.image?this.props.image:'clear-sky'}`}>
            <div className="disp-image"></div>
                     {this.props.children}
            </div>
        )
    }
}

export default Display