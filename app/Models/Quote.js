

export class Quote{
    constructor(data) {
        this.content = data.content,
        this.author= data.author
    }

    get QuoteTemplate() {
        return `
        <section class="bg-secondary col-6"
        <div class="">${this.content}</div>
        </section>
        <section>
        <div class="on-hover">${this.author}</div>
        
        </section>
        `
    }
}