import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";



function _drawQuote() {
    let quote = ProxyState.quote
    if (!quote) {
        return
    }
    document.getElementById('quote').textContent =  `${quote.content} | ${quote.author}`
}

export class QuoteController{
    constructor() {
        ProxyState.on('quote', _drawQuote)
        _drawQuote()
        this.getQuote()
        console.log('QuoteController Loaded');
        
    }
    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            console.log('getting quote', error);
            Pop.error(error)
        }
    }
}