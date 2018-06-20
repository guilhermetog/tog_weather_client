import React from 'react'
import * as Time from '../../apis/TimeAPI'
import s from "./DisplayWeather.less"

class DisplayWeatherNow extends React.Component{
  
  constructor(props){
    super()
    this.state = {
      ...props.store.getState().currentWeather,
      unit:"celcius",
      time:0,
      date: undefined,
     }
  }

  getTime = () =>{
    const {lat, long} = this.state.currentLocation
    var now = new Date()
    Time.getCurrentTime(lat, long, Date.now()/1000+now.getTimezoneOffset()*60)
    .then((loc_time)=>{
      this.setState({
        time:loc_time
      })
    })
  }
  
  resolveMonth = () =>{
    var months = ["janeiro", "fevereiro","março", "abriu", "maio", "junho", "julho", "agosto", "setembro", "outubro","novembro", "dezembro"]
    return months[this.state.date.getMonth()]
  }
  
  formmatedHour = () =>{
    var sec = this.state.date.getSeconds()
    var min = this.state.date.getMinutes()
    return this.state.date.getHours() + ":" + (min < 10? '0'+min : min) + ":" + (sec < 10? '0'+sec : sec)}
  
  convertCtoF = (degree) =>{
    return Math.floor(degree * 1.8 + 32)
  }
  
  convertFtoC = (degree) =>{
    return Math.floor((degree -32) / 1.8)
  }
  
  convertTemp = (e) =>{
     if(!/active/.test(e.target.className)){
       var unit = /\b(?!button\w+|active)\S+/.exec(e.target.className.toString().replace('-',''))
       if(unit == "celcius"){
          this.setState({
            unit:unit,
            currentWeather:{
              ...this.state.currentWeather,
              temp: this.convertFtoC(this.state.currentWeather.temp),
              max_temp: this.convertFtoC(this.state.currentWeather.max_temp),
              min_temp: this.convertFtoC(this.state.currentWeather.min_temp)
            }
          })
       }else{
          this.setState({
            unit:unit,
            currentWeather:{
              ...this.state.currentWeather,
              temp: this.convertCtoF(this.state.currentWeather.temp),
              max_temp: this.convertCtoF(this.state.currentWeather.max_temp),
              min_temp: this.convertCtoF(this.state.currentWeather.min_temp)
            }
          })
       }
      
     }
  }

  icon =()=>{
    switch(this.state.currentWeather.weather){
        case 'few-clouds':
            return 'fa-cloud'
        case 'scattered-clouds':
            return 'fa-cloud'
        case 'broken-clouds':
            return 'fa-cloud'
        case 'shower-rain':
            return 'fa-tint'
        case 'rain':
            return 'fa-tint'
        case 'thunderstorm':
            return 'fa-bolt'
        case 'snow':
            return 'fa-snowflake'
        case 'mist':
            return 'fa-bars'
        default:
            return 'fa-sun'
    }
  }
  
  componentWillMount(){
    this.getTime()
    this.setState({date:this.state.time == 0? new Date():new Date(this.state.time)})
    this.props.store.subscribe(()=>{
      this.setState({
        unit:"celcius",
          ...this.props.store.getState().currentWeather  
      })
      this.getTime()
    })
  }

  componentDidMount(){  
    setInterval(()=>{
      this.setState({
        time: this.state.time + 1000,
        date: new Date(this.state.time)
      })
    },1000)
  }
  
  render(){
    return(
      <div className={s.container}>
        <div className={s.weather_display}>
          <div className={s.header}>
            <nobr>
            <div className={s.title}>
              <div className={s.location}>{`${this.state.currentLocation.city} - ${this.state.currentLocation.state}, ${this.state.currentLocation.country}`}</div>
              <div className={s.date}>{`${this.state.date.getDate()} de ${this.resolveMonth()} de ${this.state.date.getFullYear()}`}</div>
            </div>
            </nobr>
            <div className={s.clock}>
              {this.formmatedHour()}
            </div>
          </div>
          <div className={s.data}>
            <div className={s.temp}>
               {this.state.currentWeather.temp}
            </div>
            <div className={s.control}>
              <div className={s.buttons}>
                <button className={`${s.button} celcius ${this.state.unit =='celcius'? s.active:''}`}
                        onClick={this.convertTemp}>ºC</button>
                <button className={`${s.button} farenheit ${this.state.unit =='farenheit'? s.active:''}`}
                        onClick={this.convertTemp}>ºF</button>
              </div>
              <div className={s.icon_weather}>
                <i className={`fas ${this.icon()}`}></i>
              </div>
            </div>
            <div className={s.display_max_min}>
              <div>  
                <i className={`fas fa-caret-up ${s.arrow_up}`}></i>
                <span className={s.max}>{`${this.state.currentWeather.max_temp}º${this.state.unit == 'celcius'?'C':'F'}`}</span>
              </div>
              <div>
                 <i className={`fas fa-caret-down ${s.arrow_down}`}></i>
                 <span className={s.min}>{`${this.state.currentWeather.min_temp}º${this.state.unit == 'celcius'?'C':'F'}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayWeatherNow