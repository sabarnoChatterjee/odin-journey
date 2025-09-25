# Functions Basics

In JavaScript, functions are reusable blocks of code that perform a specific task. They help keep programs modular, organized, and easier to maintain.

## Function Declaration
A function can be declared using the `function` keyword:

```js
function greet() {
  console.log("Hello, world!");
}
greet(); // Calls the function

# Parameters and Arguments

    Functions can take inputs called parameters. When calling a function, we pass arguments.

function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice"); // Hello, Alice!


# Return Values

    Functions can return a value using the return keyword.

function add(a, b) {
  return a + b;
}
let result = add(5, 7);
console.log(result); // 12

# Scope

    Local Scope → Variables declared inside a function are not accessible outside.
    Global Scope → Variables declared outside any function are accessible everywhere.

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible here
}
testScope();
console.log(globalVar);   // Accessible
// console.log(localVar); // Error: not defined


# Function Expressions

    Functions can also be assigned to variables:

const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob"));


# Arrow Functions

    A shorter way to write function expressions:

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5


Key Takeaways

- Functions are reusable blocks of code.
- Use parameters to make functions flexible.
- Use return to get values out of functions.
- Arrow functions provide shorter syntax.
