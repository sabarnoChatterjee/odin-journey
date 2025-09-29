# DOM Manipulation & Events

I learned how JavaScript interacts with the DOM (Document Object Model), which represents the webpage as a tree of nodes and elements.  

---

## DOM Basics
- The DOM is a tree-like structure where every HTML element is a node.  
- Nodes can be elements, text, comments, etc., but usually we work with **elements**.  
- I can select elements using:
  - `document.querySelector('selector')` → grabs the first match  
  - `document.querySelectorAll('selector')` → returns a NodeList of all matches  
- A NodeList is not a real array, but I can convert it using `Array.from()` or spread syntax (`[...nodeList]`).  

---

## Creating and Modifying Elements
- I can create new elements with `document.createElement('div')`.  
- Append them using:
  - `parent.appendChild(element)`  
  - `parent.insertBefore(newElem, referenceElem)`  
- I can remove elements with `parent.removeChild(element)` or `element.remove()`.  
- To edit elements:
  - `element.textContent = "new text"` → replaces text safely  
  - `element.innerHTML = "<b>bold</b>"` → inserts HTML, but should be used carefully  

---

## Attributes, Classes, and Styles
- Attributes can be added/removed with:
  - `element.setAttribute('id', 'myId')`  
  - `element.removeAttribute('id')`  
- Classes are easier with `element.classList`:
  - `.add()`, `.remove()`, `.toggle()`, `.contains()`  
- Inline styles can be set like:
  - `element.style.color = "blue"`  
  - CSS properties use camelCase: `backgroundColor`, `fontSize`  
  - Bracket notation also works: `element.style['background-color'] = "red"`  

---

## Events
- Event listeners let me respond to user actions.  
- Three main ways:
  1. **Inline HTML** → `<button onclick="doSomething()">` (bad practice)  
  2. **Assigning a property** → `element.onclick = () => { ... }` (works but overwrites previous)  
  3. **Using `addEventListener`** (best):  
     ```js
     element.addEventListener('click', () => {
       console.log("Clicked!");
     });
     ```  
- Event objects (`e`) give details:
  - `e.target` → the element that triggered the event  
  - Can be passed into callbacks automatically  
- I can attach listeners to multiple elements with a loop:  
  ```js
  buttons.forEach(btn => btn.addEventListener('click', fn));
