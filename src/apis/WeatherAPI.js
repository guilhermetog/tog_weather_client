const API_KEY = "729b95a3b683d81b42f6003292f010cb"

export const getCurrentWeather = async (address,callback) =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${address.city},${address.country}&appid=${API_KEY}&unit=metric`)
        .then(response =>{
            if(!response.status === "OK") throw new Error()
            return response.json()
        })
        .then(data =>{
                callback({
                    currentWeather:{
                        temp: Math.round(data.main.temp - 273.15),
                        min_temp: Math.round(data.main.temp_min - 273.15),
                        max_temp: Math.round(data.main.temp_max - 273.15),
                        weather: getFromOpenWeather(data.weather[0].icon),
                    },
                    currentLocation:{
                        city: address.city,
                        state: address.state,
                        country: address.country
                    }
                })
            }
        )
        .catch(error =>{
            callback({error: "É necessario informar o nome da cidade para localização..."})
        })      
}


function getFromOpenWeather(weather){
    var i = parseInt(/^[0-9]{2}/g.exec(weather),10)

    switch(i){
        case 2:
            return "few-clouds"
        case 3:
            return "scattered-clouds"
        case 4:
            return "broken-clouds"
        case 9:
            return "shower-rain"
        case 10:
            return "rain"
        case 11:
            return "thunderstorm"
        case 13:
            return "snow"
        case 50:
            return "mist"
        default:
            return "clear-sky" 

    }
}