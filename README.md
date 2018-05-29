## Project title
This is a weather web app that made in ReactJs.

## Motivation
It's intend to present weather data in a clever and elegant way. It will be part of my interactive portifolio.
It was created based on . It will be changed depending on demand.

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Use

 [TogWeather](https://guilhermetog.github.io/weather/)

## Tech/framework used
Ex. -

<b>Built with</b>
- [ReactJs](https://reactjs.org/)

## Features
    - Consult the temperature, humidity and weather based on the city

## Layout Structure

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



## Installation

 - Inicialize a new react app project
 - Copy the components in the folder to your project
 - Copy the App.css or it's content to your project
 - Copy the App.js as a component of your project

## API Reference

 This app consume data from the [OpenWeatherMap](https://openweathermap.org/api)


## Contribute

 - You can contribute by suggesting some improviment, report a bug or changing something you like to share.

## Credits
 - This app was made through the boilerplate [create-react-app](https://github.com/facebook/create-react-app)
 - This app is based on the following repository: [hamza-mirza](https://github.com/hamza-mirza/react-weather-app)


## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Guilherme]()