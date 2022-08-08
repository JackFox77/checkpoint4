


export class ToDo{
    constructor(data) {
        this.id = data.id
        this.user = data.user
        // this.description = data.description
        this.completed= data.completed ||false
    }

    get Template() {
        return `
        <div class="no-select"> ${this.description} <span onclick="" class="no-select" >| X</span></div>
        `
    }
}




{/* <div class="bg-secondary col-6">${this.content} | ${this.author}</div> */}