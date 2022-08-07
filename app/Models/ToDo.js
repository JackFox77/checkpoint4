


export class ToDo{
    constructor(data) {
        this.id = data.id
        this.user = data.user
        // this.description = data.description
        this.completed= data.completed ||false
    }
}