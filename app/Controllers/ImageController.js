import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"
import { Pop } from "../Utils/Pop.js"

function _drawImage() {
    
    let image = ProxyState.image
    // console.log(image);
    document.body.style.backgroundImage=`url(${image.url})`
}

export class ImageController{
    constructor(){
        
        this.getImage()
        console.log('ImageController Loaded')
        ProxyState.on('image', _drawImage)
    }
    async getImage() {
        try{
            await imageService.getImage()
            
        } catch (error) {
            console.error('service getImage', error)
            Pop.error(error)
        }
    }
}