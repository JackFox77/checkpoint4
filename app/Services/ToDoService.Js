import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { generateId } from "../Utils/generateId.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js";


function _drawTodo() {
    
}



class ToDoService{
    async getToDo() {
        const res = await sandboxApi.get('/jack/todos')
        ProxyState.todos = res.data.map(t => new ToDo(t))
        console.log(res.data)
    }
      createTodo(newTodo){
    console.log('creating todo in service', newTodo);
    ProxyState.todos = [...ProxyState.todos, new Todo(newTodo)]
          console.log(ProxyState.todos);
          window.event.preventDefault()
    }
    // async deleteTodo(todoId) {
    //     let url = `/todo/${todoId}`
    //     await sandboxApi.delete(url)
    //     ProxyState.todos= ProxyState.todos.filter(t=> t.id !=todoId)
    // }
}



export const toDoService= new ToDoService()


// async deleteCar(carId) {
//     let url = `/cars/${carId}` // string interpolation
//     await api.delete(url)
//     ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
//   }

// async getGifts(){
//     const res = await sandboxApi.get('/gifts')
//     console.log(res.data)
//     ProxyState.gifts = res.data.map(g => new Gift(g))
//     }
