


export class Weather{
    constructor(data) {
        // NOTE make sure you look at the data coming back from the API, and structure this accordingly
        this.kelvin = data.main.temp  
        // NOTE set up a default boolean on your model, and use that toggle between showing farenheit/celsius
        this.isFahrenheit = false
        this.fahrenheit = Math.floor((this.kelvin - 273.15) * 9 / 5 + 32 )
        this.celsius = Math.floor((this.fahrenheit-32) * 5/9)
    }
    get WeatherTemplate() {
        
        return `
        <section>
        <h5 class="bg-secondary col-3">${this.fahrenheit}</h5>
        <button onclick="app.weatherController.toggleWeather()">Toggle</button>

        </section>
        `
    }
}



// (0K − 273.15) × 9/5 + 32  kelvin to fahrenheit