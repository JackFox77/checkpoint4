


export class ToDo{
    constructor(data) {
        this.id = data.id
        this.user = data.user
        this.description = data.description
        this.completed= data.completed ||false
    }

    get Template() {
        // NOTE                                                                                VVVV Remember to pass down your id. Don't forget the quotes around it
        return `
        <div class="no-select"> ${this.description} |<span onclick="app.todoController.deleteTodo('${this.id}')" class="no-select text-danger"> x </span></div>
        <input type="checkbox" ${this.completed ? 'checked': ''} onclick="app.todoController.toggletodo('${this.id}')">
        `
    }
}



// onchange="app.sandboxSpellsController.toggleSpell('${this.id}')
{/* <div class="bg-secondary col-6">${this.content} | ${this.author}</div> */}