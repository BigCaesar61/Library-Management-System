//Task 1: Create a Book Class

class Book {
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
        return this._isAvailable; //tells us if the book is available
    }

    set _isAvailable(status) {
        this._isAvailable = status; //alows you to set status of the book (true or false)
    }

}


//Task 2: Create a Section Class

class Section {
    constructor(name,books) {
        this.name = name;
        this.books = [];

    }

    addBook(book) {
        this.book.push(book); //method that pushes new books into our book array
    }

    getAvailableBooks() {
        return this.books.filter(book => book._isAvailable).length; //number of books available
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Available: ${book.isAvailable ? 'Yes' : 'No'}`)
        });
    }
}