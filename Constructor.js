// Problem Statement:
// Write a factory function called createEmployee that generates an object representing an employee. Each employee object should have the properties name, role, and salary, along with a method introduce() that prints a message introducing the employee's name and role.

// Steps:

// Create the factory function createEmployee.
// The function should accept name, role, and salary as parameters.
// Return an object with properties name, role, salary, and a method introduce().
// The introduce() method should print a string: "Hello, I am [name], working as a [role]."
// Example:
// const employee1 = createEmployee("Alice", "Developer", 60000);
// employee1.introduce();
// // Output: Hello, I am Alice, working as a Developer.

function createEmployee(name, role, salary) {
  return {
    name,
    role,
    salary,
    introduce() {
      console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);
    }
  };
}

// Example usage
const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce(); // Output: Hello, I am Alice, working as a Developer.




// Problem Statement:
// Create a factory function createCar that returns an object representing a car. Each car should have make, model, and year as properties. Add a method describeCar() to the object that outputs a description of the car's make, model, and year.

// Steps:

// Define the factory function createCar.
// The function should accept make, model, and year as parameters.
// Return an object with the properties make, model, and year.
// The describeCar() method should print "This car is a [year] [make] [model]."
// Example:
// const car = createCar("Toyota", "Camry", 2022);
// car.describeCar();
// // Output: This car is a 2022 Toyota Camry.


function createEmployee(name, role, salary) {
  if (!name || !role || typeof salary !== 'number') {
    throw new Error('Invalid employee data');
  }
  
  return {
    name,
    role,
    salary,
    introduce() {
      console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);
    },
    getSalary() {
      return this.salary;
    }
  };
}


// Problem Statement:
// Create a factory function createInventoryItem to represent items in an inventory system. Each item should have properties like name, category, and price. Add a method describeItem() that outputs the item's details. Extend this functionality by creating another factory function addItemDiscount, which accepts an inventoryItem object, a discountPercent, and adds a discountedPrice property based on the discount. Finally, create a method applyDiscount() in addItemDiscount that recalculates and outputs the discounted price.

// Steps:

// Define createInventoryItem to take name, category, and price.
// Add a method describeItem() to createInventoryItem to print the item's details.
// Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
// Calculate discountedPrice based on the original price and discountPercent.
// Add a method applyDiscount() to addItemDiscount that logs the discountedPrice for the item.
// Example:
// const item = createInventoryItem("Laptop", "Electronics", 1500);
// item.describeItem();
// // Output: Item: Laptop, Category: Electronics, Price: 1500

// const discountedItem = addItemDiscount(item, 10);
// discountedItem.applyDiscount();
// // Output: Discounted Price for Laptop: 1350


// Factory function to create inventory items
function createInventoryItem(name, category, price) {
  return {
    name,
    category,
    price,
    describeItem() {
      console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
    }
  };
}

// Factory function to add discount to inventory items
function addItemDiscount(inventoryItem, discountPercent) {
  // Calculate discounted price
  const discountAmount = inventoryItem.price * (discountPercent / 100);
  const discountedPrice = inventoryItem.price - discountAmount;
  
  return {
    ...inventoryItem, // Spread existing properties
    discountPercent,
    discountedPrice,
    applyDiscount() {
      console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
    }
  };
}

// Example usage
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350



// Problem Statement:
// You have been given a factory function createBook with a method printInfo. However, the printInfo method is not correctly using the this keyword to access book properties. Identify and fix the issue so that the method correctly outputs the book's title and author.

// Steps:

// Inspect the createBook function to identify how this is used incorrectly in printInfo.
// Correct the this usage to access title and author.
// Test the function to ensure it works as expected.
// Original Code:

// function createBook(title, author) {
//   return {
//     title: title,
//     author: author,
//     printInfo: () => {
//       console.log("Book: " + this.title + ", Author: " + this.author);
//     }
//   };
// }

// Expected Output After Fix:

// const book = createBook("1984", "George Orwell");
// book.printInfo();
// // Output: Book: 1984, Author: George Orwell








// Problem Statement:
// Create a factory function createLibrary that manages a collection of books in a library. Each library should allow for adding new books, removing books by title, and displaying all available books. Implement helper factory functions for creating Book objects, which include properties title and author, and a method details() to print the book’s details.

// Steps:

// Define the Book factory function with title, author, and a details() method.
// Define the createLibrary factory function that returns an object with methods to:
// Add a book to the collection.
// Remove a book by title.
// List all books by calling each book’s details() method.
// Implement createLibrary to store books in an internal array.
// Example:
// const library = createLibrary();

// const book1 = Book("To Kill a Mockingbird", "Harper Lee");
// const book2 = Book("1984", "George Orwell");

// library.addBook(book1);
// library.addBook(book2);

// library.listBooks();
// // Output:
// // Title: To Kill a Mockingbird, Author: Harper Lee
// // Title: 1984, Author: George Orwell

// library.removeBook("1984");
// library.listBooks();
// // Output:
// // Title: To Kill a Mockingbird, Author: Harper Lee



