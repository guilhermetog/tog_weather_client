const API_KEY = "729b95a3b683d81b42f6003292f010cb"

export const getCurrentWeather = async (address,callback) =>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${address.city},${address.country}&appid=${API_KEY}&unit=metric`)
        .then(response =>{
            if(!response.status === "OK") throw new Error()
            return response.json()
        })
        .then(data =>{
                var max_min = getMaxMin(data.list)
                callback({
                    currentWeather:{
                        temp: Math.round(data.list[0].main.temp - 273.15),
                        min_temp: Math.round(max_min.min - 273.15),
                        max_temp: Math.round(max_min.max - 273.15),
                        weather: getFromOpenWeather(data.list[0].weather[0].icon),
                    },
                    currentLocation:{
                        city: address.city,
                        state: address.state,
                        country: address.country,
                        lat: address.lat,
                        long: address.long
                    }
                })
            })
        .catch(error =>{
            callback({error: "É necessario informar o nome da cidade para localização..."})
        })      
}

function getMaxMin (list){
    list = list.filter((e,i)=>i<5)
    var min = list.sort((a,b)=>a.main.temp_min > b.main.temp_min)[0].main.temp_min
    var max = list.sort((a,b)=>a.main.temp_max < b.main.temp_max)[0].main.temp_max
    return {min, max}
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