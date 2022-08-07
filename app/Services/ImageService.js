import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxApi } from "./AxiosService.js"





class ImageService{
    async getImage() {
        const res = await sandboxApi.get('/images')
        ProxyState.image = new Image(res.data)
        console.log(res.data)
    }
}





export const imageService= new ImageService()