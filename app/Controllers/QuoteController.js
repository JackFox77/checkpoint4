import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";



function _drawQuote() {
    let quote = ProxyState.quote
    if (!quote) {
        return
    }
    document.getElementById('quote').innerHTML = `${quote.content} ` 
    document.getElementById('author').innerHTML = `${quote.author}`
    // document.getElementById('quote').innerHTML= QuoteTemplate
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