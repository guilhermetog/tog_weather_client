import {createStore, applyMiddleware, combineReducers} from 'redux'
import Thunk from 'redux-thunk'

function currentWeatherReducer(state = {
    currentWeather:{
        temp: 0,
        min_temp: 0,
        max_temp: 0,
        city: "",
        weather: "",
    },
    currentLocation:{
        city:"",
        state:"",
        country:"",
        lat:"",
        long:"",
    }
}, action = {}){
    switch(action.type){
        case 'WEATHER_CHANGED':
            return {
                ...action.data
            }
        default:
            return state
    }
}

function notificationReducer(state ={erro:""}, action = {}){
    switch(action.type){
        case 'CLEAR_ERROR':
            return {
                error:""
            }
        case 'SHOW_ERROR':
            return {
                error: action.data
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        currentWeather: currentWeatherReducer,
        notification: notificationReducer}), 
    applyMiddleware(Thunk)
)

export default store