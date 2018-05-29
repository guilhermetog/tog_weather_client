import React, { Component } from 'react'
import Title from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "729b95a3b683d81b42f6003292f010cb"

class App extends Component{
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) =>{
    e.preventDefault()
    
    const city = e.target.elements.city.value

    if(city){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&unit=metric`)
      const data = await api_call.json()
      
      this.setState({
        temperature: Math.round((data.main.temp - 273.15)*100)/100,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "É necessario informar uma cidade e um país para localização..."
      })
    }
  }
  render(){
    return(
      <div className="main">
        <div className="card">
            <Title/>
            <div className="form-container">
              <Form getWeather={this.getWeather}/>
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
        </div>
      </div>
    )
  }
}

export default App;
