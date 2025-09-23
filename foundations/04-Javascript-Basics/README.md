# Variables and Operators

This lesson introduces how to store data in variables and how to manipulate values using operators.

---

## What I Learned

- Declaring variables with `let` and `const`
- Running JavaScript code inside an HTML file
- Performing arithmetic operations: `+`, `-`, `*`, `/`
- Using strings and concatenating them with `+`
- Comparison operators: `>`, `<`, `==`, `===`, `!=`
- Logical operators: `&&`, `||`, `!`
- Numeric conversion using the **unary plus (`+`)**

---

## Key Notes

- **Variables**  
  - `let`: reassignable values  
  - `const`: values that don’t change  

- **Operators**  
  - Arithmetic: for math operations  
  - String concatenation: join strings with `+`  
  - Comparison & logical: evaluate conditions  
  - Unary plus (`+`): quickly convert strings to numbers  

---

## Example: Numeric Conversion

```javascript
let apples = "2";
let oranges = "3";

// Without numeric conversion: concatenates strings
alert(apples + oranges);   // "23"

// With unary plus: converts strings to numbers
alert(+apples + +oranges); // 5
