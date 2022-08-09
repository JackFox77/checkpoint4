import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import {Weather} from "../Models/Weather.js"


function _drawWeather() {
    let weather = ProxyState.weather
    console.log(weather)
    // NOTE write an if statement to display farenheit or celsius depending on the bool we have on our model
    // NOTE reference spellbox to see how to flip a bool
    document.getElementById('weather').innerHTML = weather.WeatherTemplate

    
}




export class WeatherController{
    constructor() {
        console.log('WeatherController Loaded')
        _drawWeather()
        ProxyState.on('weather', _drawWeather)
        ProxyState.on('')
        this.getWeather()
    }
    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.log('getting weather', error);
            Pop.error(error)
        }
    }
    toggleWeather() {
        
    }
}
