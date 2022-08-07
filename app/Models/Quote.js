

export class Quote{
    constructor(data) {
        this.content = data.content,
        this.author= data.author
    }

    get QuoteTemplate() {
        return `
        <div class="bg-secondary col-6">${this.content} | ${this.author}</div>
        `
    }
}