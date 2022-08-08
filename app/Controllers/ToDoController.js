import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js"
// import { sandboxApi } from "../Services/AxiosService.js";
import { toDoService } from "../Services/TodoService.js"
import{generateId} from "../Utils/generateId.js"
import { Pop } from "../Utils/Pop.js";

function _drawToDo() {
    let template = ''
    console.log('todo')
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todo').innerHTML=template
    
}


export class TodoController{
    constructor() {
        ProxyState.on('todos',_drawToDo)
        console.log('todo controller loaded');
        // window.event.preventDefault()
        this.getTodo()
    }
    addTodo(id) {
    window.event.preventDefault()
    console.log('creating todo');
    let form = window.event.target
    let newTodo = {
      name: form.name.value,
      
        }
        window.event.preventDefault()
        console.log(newTodo)
        toDoService.createTodo(newTodo)
        Pop.toast('party created')
    }
    async getTodo() {
        try {
    await toDoService.getToDo()
} catch (error) {
    console.error('[getting todo]', error)
    Pop.error(error)
}
    }
    async deleteTodo(id) {
        try {
            await toDoService.deleteTodo(id)
        } catch (error) {
            console.error('[delete todo]', error)
            Pop.error(error)
        }
    }
}


