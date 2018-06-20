import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import DisplayWeather from "../../components/DisplayWeather"
import TitleApp from "../../components/TitleApp"
import SearchBar from "../../components/SearchBar"
import OpenMap from "../../components/Map"

import "./WeatherApp.css"


class WeatherApp extends Component{

  state = {
    currentWeather:{
      temp: 0,
      max_temp:0,
      min_temp:0,
      weather:""
    },
    currentLocation:{
      city:"",
      state:"",
      country:""
    }
  }

  componentWillMount(){
    this.context.store.subscribe(()=>{
        this.setState({
            ...this.context.store.getState().currentWeather
        })
    })
  }

  componentDidMount(){
    console.info("Access this and other source codes through the github page: https://github.com/guilhermetog")
  }

  setUpMap = (map) =>{
    this.map = map
  }

  searchHandler = (input) =>{
    if(this.map){
      this.map.lookForCity(input)
    }
  }
  
  render(){
    return(
      <Fragment>
        <div className={`main img-${this.state.currentWeather.weather?this.state.currentWeather.weather:'clear-sky'}`}>
          <div className="card">
            <div className="display">
              {this.state.currentWeather.weather?
                <DisplayWeather store={this.context.store}/>:''}
              <TitleApp/>
            </div>
            <div className="display-map">
              <OpenMap ref={this.setUpMap} />
              <SearchBar searchHandler={this.searchHandler} placeholder="Cidade..."/>
            </div>
          </div>
        </div> 
      </Fragment>
    )
  }
}

WeatherApp.contextTypes = {
  store: PropTypes.object.isRequired
}


export default WeatherApp;
