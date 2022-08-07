import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js";


class QuoteService{
    async getQuote() {
        const res = await sandboxApi.get('/quotes')
        // console.log(res)
        ProxyState.quote = new Quote(res.data)
        console.log(res.data)
    }
    
}








export const quoteService = new QuoteService()