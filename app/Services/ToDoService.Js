import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js";

class ToDoService{
  async toggleTodo(todoId) {
    let todo = ProxyState.todos.find(t => t.id == todoId)
    if (!todo) {
      throw new Error('bad spell id');
    }
      todo.completed = !todo.completed
    let todoIndex = ProxyState.todos.indexOf(todo)
    // do the async stuff

    let res = await sandboxApi.put(`/jack/todos/${todoId}`, todo)

    let updatedTodo = new ToDo(res.data)

    ProxyState.todos.splice(todoIndex, 1, updatedTodo)

    ProxyState.todos = ProxyState.todos
  }

    async getToDo() {
        const res = await sandboxApi.get('/jack/todos')
        ProxyState.todos = res.data.map(t => new ToDo(t))
        console.log(res.data)
    }
  async createTodo(todoFormData) {
    let res = await sandboxApi.post('/jack/todos', todoFormData)
    let todo = new ToDo(res.data)
    ProxyState.todos = [...ProxyState.todos, todo]
    // ProxyState.cars = [...ProxyState.cars, car]
      
    }
  async deleteTodo(id) {
        let url = `/jack/todos/${id}`
        await sandboxApi.delete(url)
        ProxyState.todos= ProxyState.todos.filter(t=> t.id !=id)
  }
  
}

export const toDoService= new ToDoService()

  // async deleteSpell(id) {
  //   try {
  //     const yes = await Pop.confirm('Delete Spell')
  //     if (!yes) { return } // Full Stop 

  //     await sandboxSpellsService.deleteSpell(id)
  //   } catch (error) {
  //     console.error('[Delete Spell]', error)
  //     Pop.error(error)
  //   }
  // }




