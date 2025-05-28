// Step 1: Declare a global variable
let age = 25;

// Step 2: Function to display the global variable
function displayAge() {
  console.log("Current age (from displayAge):", age); // Accesses global `age`
}

// Step 3: Function to modify the global variable
function changeAge() {
  age = 30; // Updates the global `age`
  console.log("Age updated (inside changeAge):", age);
}

// Initial call
displayAge(); // Output: "Current age: 25"

// Modify and verify
changeAge();  // Output: "Age updated: 30"
displayAge(); // Output: "Current age: 30" (global `age` was changed)





const library = {
  books: [
    { 
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      year: 1937,
      isbn: null // Added optional field
    }
  ],

  // Improved addBook method with better validation
  addBook(book) {
    // Validate required fields
    const requiredFields = ['title', 'author', 'year'];
    const missingFields = requiredFields.filter(field => !book[field]);
    
    if (missingFields.length > 0) {
      console.log(`Missing required fields: ${missingFields.join(', ')}`);
      return false;
    }

    // Validate year is a number and reasonable
    if (typeof book.year !== 'number' || book.year < 0 || book.year > new Date().getFullYear()) {
      console.log(`Invalid publication year: ${book.year}`);
      return false;
    }

    // Check for duplicate titles
    if (this.findBookByTitle(book.title)) {
      console.log(`Book "${book.title}" already exists in the library.`);
      return false;
    }

    // Add the valid book
    this.books.push({
      title: book.title.trim(),
      author: book.author.trim(),
      year: book.year,
      isbn: book.isbn ? book.isbn.trim() : null
    });
    return true;
  },

  // Case-insensitive search
  findBookByTitle(title) {
    if (!title) return null;
    return this.books.find(book => 
      book.title.toLowerCase() === title.toLowerCase().trim()
    );
  },

  // Improved removeBook with return status
  removeBook(title) {
    if (!title) {
      console.log("No title provided for removal.");
      return false;
    }

    const index = this.books.findIndex(book => 
      book.title.toLowerCase() === title.toLowerCase().trim()
    );

    if (index === -1) {
      console.log(`Book "${title}" not found.`);
      return false;
    }

    this.books.splice(index, 1);
    return true;
  },

  // Additional helpful method
  listBooks() {
    return this.books.map(book => 
      `${book.title} by ${book.author} (${book.year})${book.isbn ? ` [ISBN: ${book.isbn}]` : ''}`
    );
  }
};

// Testing the improved system
console.log("Initial book count:", library.books.length); // 1

// Attempt to add invalid book (missing title)
library.addBook({ author: "George Orwell", year: 1949 });
console.log("Book count after invalid add:", library.books.length); // Still 1

// Add valid book
const added = library.addBook({ 
  title: "1984", 
  author: "George Orwell", 
  year: 1949,
  isbn: "978-0451524935"
});
console.log("Add successful:", added); // true
console.log("Book count after valid add:", library.books.length); // 2

// Try to add duplicate
library.addBook({ title: "1984", author: "Someone Else", year: 2000 });

// Find book (case insensitive)
console.log(library.findBookByTitle("tHE hoBBit")); // Finds The Hobbit

// Remove book
const removed = library.removeBook("The Hobbit");
console.log("Remove successful:", removed); // true
console.log("Final book count:", library.books.length); // 1

// List all books
console.log(library.listBooks());
















const userProfile = {
  name: "Alice",
  age: 28,

  // Fixed template literal syntax and method definition
  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  // Improved updateAge method with proper method calling
  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }
    this.age = newAge;
    console.log(this.details()); // Added parentheses to call the method
  }
};

// Testing the corrected functionality
userProfile.updateAge(30);      // Logs: "Alice is 30 years old."
console.log(userProfile.details()); // Logs: "Alice is 30 years old."
