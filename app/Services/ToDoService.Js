import { ProxyState } from "../AppState";
import { ToDo } from "../Models/ToDo";
import { sandboxApi } from "./AxiosService";


function _drawTodo() {
    
}



class ToDoService{
    async getToDo() {
        let res = await sandboxApi.get('/jack/todos')
        ProxyState.todos = res.data.map(t => ToDo(t))
        console.log(res, 'todo')
    }
}



export const toDoService= new ToDoService()
