import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    let weather = ProxyState.weather
    console.log(weather)
    if (!weather) {
        return
    }
    document.getElementById('weather').textContent = `${weather.main}`
    console.log(weather.main)
}




export class WeatherController{
    constructor() {
        console.log('WeatherController Loaded')
        _drawWeather()
    }
    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.log('getting weather', error);
            Pop.error(error)
        }
    }
}
