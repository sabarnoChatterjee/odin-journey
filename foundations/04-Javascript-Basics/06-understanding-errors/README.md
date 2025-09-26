# Understanding Errors

This lesson teaches how to read, interpret, and handle JavaScript errors—making debugging less intimidating and more effective.

---

## Key Concepts

- Errors in JavaScript are objects with a **type/name** and a **message**.  
- An error message includes the file name and line number where the error occurred.  
- **Stack trace** shows the path of function calls that led to the error.  
- Common error types:
  - **SyntaxError**: code written with invalid syntax  
  - **ReferenceError**: using a variable that doesn’t exist  
  - **TypeError**: applying a method or operation to an incompatible type  

---

## Debugging & Resolution Tips

- Treat error messages as useful clues—not enemies.  
- Use the **name** and **message** parts of an error to pinpoint problems.  
- Use **try…catch** blocks to handle errors gracefully and prevent crashes.  
- Use `console.log`, breakpoints, and the debugger tool to inspect variables and flow.  
- Don’t ignore warnings—they might not break code but point to potential issues.  

---

## Why This Matters

Debugging is a core developer skill. Understanding errors deeply lets you:

- Fix issues faster  
- Read stack traces like a map  
- Ask better help questions (with error details)  
- Prevent frustration and write more resilient code  

---

## References

- [The Odin Project – Understanding Errors](https://www.theodinproject.com/lessons/foundations-understanding-errors)  
- MDN JavaScript Errors documentation  
