import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";

function time() {
        const date = new Date()
    console.log(date)
    document.getElementById('clock').textContent = `${date}`
}
    


export class ClockController{
    constructor() {
    time()
    }
    
}



setInterval(time,1000)