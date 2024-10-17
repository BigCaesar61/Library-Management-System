//Task 6: Create and Manage Sections and Patrons
// Create sections

const fiction = new Section("Fiction");

const science = new Section("Science");

// Create books

const book1 = new Book("1984", "George Orwell", "1234567890");

const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");

const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections

fiction.addBook(book1);

fiction.addBook(book2);

science.addBook(book3);

// Create patrons

const regularPatron = new Patron("John Doe");

const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book

regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)

vipPatron.borrowBook(book1);


// Return the book

regularPatron.returnBook(book1);

// List books and availability

fiction.listBooks();

// Calculate total available books in each section

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);

console.log(`Total available books in Science: ${science.getAvailableBooks()}`);







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
    constructor(name) {
        this.name = name;
        this.books = [];

    }

    addBook(book) {
        this.book.push(book); //method that pushes new books into our book array
    }

    getAvailableBooks() {
        return this.books.filter(book => book._isAvailable).length; //number of books available
    }

    //Task 5: Handle Books Borrowing and Returning

    calculateTotalBooksAvailable() {
        return this.books.filter(book => book._isAvailable).length; //returns number of books available
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Available: ${book._isAvailable ? 'Yes' : 'No'}`)
        });
    }
}


//Task 3: Create a Patron Class

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    
    borrowBook(book) {
        if (book._isAvailable) {
            this.borrowedBooks.push(book);
            book._isAvailable = false; 
            console.log(`${this.name} has borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently not available.`);
        }
    }

    returnBook(book) {
        const bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex > -1) {
            this.borrowedBooks.splice(bookIndex, 1); //removes book from borrowedBooks
            book._isAvailable = true; //Makes the book available again
            console.log(`${this.name} has returned "${book.title}".`)
        } else {
            console.log(`${this.name} hasn't borrowed "${book.title}".`);
        }
    }

}

//Task 4: Create a VIPPatron Class that Inherits from Patron
 

class VIPPatron extends Patron {
    constructor(name) {
        super(name); //calls parent class
        this.priority = true; //gives vip patrons priority
    }

    borrowBook(book, competingPatron = null) { //overrides borrowbook method for the VIP
        if (competingPatron && !competingPatron.priority && !book._isAvailable) {
            console.log(`${this.name} has priority over ${competingPatron.name} to borrow "${book.title}".`)
        }

        if (book._isAvailable || this.priority) {
            this.borrowedBooks.push(book);
            book._isAvailable = false; //updates book availability status
            console.log(`${this.name} (VIP) has borrowed "${book.title}".`)
        } else {
            console.log(`"${book.title}" is currently not available.`)
        }
    }
}


