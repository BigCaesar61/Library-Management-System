//Task 1: Create a Book Class

class book {
    constructor(title, author, ISBN ) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true //when true that means the book is available
    }

    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`);
    }

    get _isAvailable() {
        return this._isAvailable;
    }

    set _isAvailable(status) {
        this._isAvailable = status;
    }

}
