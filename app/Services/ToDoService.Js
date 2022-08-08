import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosService.js";

class ToDoService{
    async getToDo() {
        const res = await sandboxApi.get('/jack/todos')
        ProxyState.todos = res.data.map(t => new ToDo(t))
        console.log(res.data)
    }
  createTodo(newTodo) {
    
    console.log('creating todo in service', newTodo);
    ProxyState.todos = [...ProxyState.todos, new ToDo(newTodo)]
      console.log(ProxyState.todos);
      window.event.preventDefault()
    }
    async deleteTodo(id) {
        let url = `/todo/${id}`
        await sandboxApi.delete(url)
        ProxyState.todos= ProxyState.todos.filter(t=> t.id !=id)
    }
}

export const toDoService= new ToDoService()

  // async createCar(carFormData) {

  //   let res = await api.post('/cars', carFormData)
  //   // ALWAYS LOOK AT YOUR RESPONSE
  //   let car = new Car(res.data)
  //   ProxyState.cars = [...ProxyState.cars, car]
  // }