## Project title
This is a weather web app that made in ReactJs.

## Motivation
It's intend to present weather data in a clever and elegant way. It will be part of my interactive portifolio. It will be changed depending on demand.

## Code style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Use

 [TogWeather](https://guilhermetog.github.io/weather/)

## Tech/framework used

<b>Built with</b>
- [ReactJs](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Google Maps API](https://developers.google.com/maps/)
- [OpenLayers](https://openlayers.org/)
- [Less](lesscss.org/)

## Features

    - Current Weather
    - Max and Min temperature in the next 15 hours
    - Correct date-time for every place
    - Search through maps
    - Search for the name of the city

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


## API Reference

 This app consumes main data from [OpenWeatherMap](https://openweathermap.org/api)
 This app also consumes extra data from [Google Maps API](https://developers.google.com/maps/)

## Contribute

 - You can contribute by suggesting some improviment, report a bug or changing something you like to share.

## Credits
 - This app was made through the boilerplate [create-react-app](https://github.com/facebook/create-react-app)
 - This app is based on the following repository: [hamza-mirza](https://github.com/hamza-mirza/react-weather-app)
 - All images used are provided for unsplash photographers and are available at [Photo Collection](https://unsplash.com/collections/2212738/weather-app-collection)
 
## License

CC0 © [Guilherme]()
