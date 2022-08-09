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
    document.getElementById('todo').innerHTML = template
    document.getElementById('completed').innerHTML = `
    <div class="">
        <div
            <div>
            <b>Todos -</b>${ProxyState.todos.length}
            </div>
            <div>
            <b>Finished -</b>   ${ProxyState.todos.filter(t => t.completed).length}
        </div>
    </div>
    `
    
}


// function _draw() {

//   let template = ''
//   ProxyState.sandboxSpells.forEach(s => template += s.ListTemplate)
//   // @ts-ignore
//   document.getElementById('sandbox-spells').innerHTML = template
//   // @ts-ignore
//   document.getElementById('known-spells').innerHTML = `
//   <div class="text-white">
//     <div class="d-flex justify-content-between">
//       <div>
//        <b>Known Spells:</b> ${ProxyState.sandboxSpells.length}
//       </div>
//        <div>
//           <b>Prepared Spells:</b> ${ProxyState.sandboxSpells.filter(s => s.prepared).length}
//       </div>
//     </div>
//   </div>
//   `
// }


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
      description: form.description.value,
      
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
            const yes = await Pop.confirm('Delete Todo')
            if (!yes){return}

            await toDoService.deleteTodo(id)
        } catch (error) {
            console.error('[delete todo]', error)
            Pop.error(error)
        }
    }
    async toggletodo(todoId) {
        try {
            
            
            await toDoService.toggleTodo(todoId)
        } catch (error) {
            console.error('[toggle todo]', error)
            Pop.error(error)
        }
    }
}


