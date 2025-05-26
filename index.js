// L0 - Square and Cube of a Number with Implicit Return

// Problem Statement:
// Write an arrow function that takes a number
//  as input and returns both its square and 
// cube in an object, using implicit return. 
// The function should be as concise as possible.

const squareAndCube = (num) => ({ square: num * num, cube: num * num * num });



// L1 - Multi-Level Array and Object Destructuring

// Problem Statement:
// You are working with an array of objects where
// each object represents a person with their name and address details. Use multi-level destructuring to extract the person's name, city, and street information.

// Steps:
// Given an array of people objects like:
// const people = [ { name: "Alice", address:
// { city: "New York", street: { name: "Broadway",
//  number: 123 } } },
//  { name: "Bob", address: { city: "Los Angeles",
//  street: { name: "Sunset Boulevard", number: 456 } } } ];

// Use multi-level destructuring to extract:
// name of each person.
// city and street name from the address.
// Return an array of strings in the
// format: "Alice lives in New York on Broadway".
// Example Input:

// const people = [ { name: "Alice", address:
//  { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

// Example Output:

// ["Alice lives in New York on Broadway",
// "Bob lives in Los Angeles on Sunset Boulevard"]

const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: {
        name: "Broadway",
        number: 123,
      },
    },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: {
        name: "Sunset Boulevard",
        number: 456,
      },
    },
  },
];

const result = people.map(
  ({
    name,
    address: {
      city,
      street: { name: streetName },
    },
  }) => `${name} lives in ${city} on ${streetName}`
);

console.log(result);


// L1 - Merging and Updating Nested Objects with Spread Operator

// Problem Statement:
// You are given two nested objects: profile and
//  updates. Your task is to merge the two objects
//  using the spread operator, ensuring that specific
//  nested properties in updates overwrite those in profile.

// Steps:
// Create two objects:
// profile: contains name, age, address (which is
//  an object with properties like city and zipcode).
// updates: contains updated age, and an updated
//  address object with a new zipcode and added
// country property.
// Merge the objects using the spread operator,
// ensuring the updated properties from updates
//  overwrite the existing ones.
// Return the new merged object.
// Example Input

// const profile = { name: "Charlie", age: 29,
// address: { city: "San Francisco", zipcode: "94101" } };

// const updates = { age: 30, address:
// { zipcode: "94109", country: "USA" } };

// Example Output:

// { name: "Charlie", age: 30, address:
// { city: "San Francisco", zipcode: "94109", country: "USA" } }

const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94101",
  },
};

const updates = {
  age: 30,
  address: {
    zipcode: "94109",
    country: "USA",
  },
};

// Merge objects with spread operator, handling nested address object
const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address,
  },
};

console.log(mergedProfile);