// Define the Book class
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define the Manual class extending Book
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    dispose(currentYear) {
        if (currentYear - this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}

// Define the Novel class extending Book
class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}

// Declare an object of the Novel class
let prideAndPrejudice = new Novel(
    'Pride and Prejudice',    // Title
    'Jane Austen',            // Author
    1813,                     // Copyright date
    '1111111111111',         // ISBN
    432,                     // Number of pages
    32,                      // Number of times the book has been checked out
    'No'                     // Whether the book has been discarded
);

// Declare an object of the Manual class
let makingTheShip = new Manual(
    'Top Secret Shuttle Building Manual', // Title
    'Redacted',                         // Author
    2013,                               // Copyright date
    '0000000000000',                    // ISBN
    1147,                               // Number of pages
    1,                                  // Number of times the book has been checked out
    'No'                                // Whether the book has been discarded
);

// Code to update the properties
// For the Manual book which needs to be discarded
makingTheShip.dispose(2024); // Call dispose with the current year

// For the Novel book which has been checked out 5 more times
prideAndPrejudice.checkout(5); // Update the number of times checked out

// Output the updated objects to verify
console.log(prideAndPrejudice);
console.log(makingTheShip);