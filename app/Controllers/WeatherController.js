import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    let weather = ProxyState.weather
    console.log(weather)
    document.getElementById('weather').textContent = weather
    console.log(weather)
}




export class WeatherController{
    constructor() {
        console.log('WeatherController Loaded')
        _drawWeather()
        ProxyState.on('weather', _drawWeather)
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
