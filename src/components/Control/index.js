import React, { Component} from 'react'
import "./Control.css"

class Control extends Component{
    render(){
        return(
            <div className="control-container">
                {this.props.children}
            </div>
        )
    }
}


export default Control