


export class Weather{
    constructor(data) {
        this.temp=data.temp
    }
    get WeatherTemplate() {
        return `
        <div class="bg-secondary col-3">${this.data}</div>
        `
    }
}