import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js"
// import { sandboxApi } from "../Services/AxiosService.js";
// import {toDoService} from "../Services/TodoService.js"

// function _drawSpells() {
//   let template = ''

//   ProxyState.dndSpells.forEach(s => template += s.Template)

//   // @ts-ignore
//   document.getElementById('dnd-spells').innerHTML = template
// }

function _drawToDo() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todo').innerText=template
}


export class TodoController{
    constructor() {
        ProxyState.on('todos',_drawToDo)
        console.log('todo controller loaded');
    }
    
}