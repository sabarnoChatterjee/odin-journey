# Block and Inline Elements  

In HTML, elements are classified as either **block-level** or **inline**. This affects how they are displayed in the document flow.  

---

## Block Elements  
- Start on a new line and take up the full available width by default  
- Respect top and bottom margins  
- Examples: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<header>`, `<footer>`  

---

## Inline Elements  
- Flow within a line, only taking up as much width as their content  
- Do not force line breaks  
- Respect horizontal margins/padding, but vertical margins may not apply as expected  
- Examples: `<span>`, `<a>`, `<em>`, `<strong>`, `<img>`  

---

## Key Notes  
- Block elements can contain other block or inline elements.  
- Inline elements generally contain only text or other inline elements.  
- CSS `display` property can change behavior:  
  - `display: block` → makes an inline element act like a block  
  - `display: inline` → makes a block act inline  
  - `display: inline-block` → hybrid: inline flow but allows block-like dimensions  

---

## References  
- [The Odin Project – Block and Inline Elements](https://www.theodinproject.com/lessons/foundations-block-and-inline)  
- [MDN: Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)  
- [MDN: Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)  
