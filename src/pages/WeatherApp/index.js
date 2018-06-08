import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Card from "../../components/Card"
import Display from "../../components/Display"
import DisplayWeatherNow from "../../components/DisplayWeatherNow"
import TitleApp from "../../components/TitleApp"
import Control from "../../components/Control"
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
        console.log({label:"Dados do estado apos alteração: ",data:this.state})
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
        <div className="main">
          <Card>
            <Display image={this.state.currentWeather.weather}>
              {this.state.currentWeather.weather?
                <DisplayWeatherNow weather={this.state.currentWeather} 
                                  location={this.state.currentLocation}/>:''}
              <TitleApp/>
            </Display>
            <Control>
              <OpenMap ref={this.setUpMap} />
              <SearchBar searchHandler={this.searchHandler} placeholder="Cidade..."/>
            </Control>
          </Card>
        </div> 
      </Fragment>
    )
  }
}

WeatherApp.contextTypes = {
  store: PropTypes.object.isRequired
}


export default WeatherApp;
