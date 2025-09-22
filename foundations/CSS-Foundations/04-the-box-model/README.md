# The Box Model  

In CSS, every element is treated as a rectangular box. The **box model** defines how an element’s size and space are calculated.  

---

## Structure of the Box Model  

1. **Content** → The actual text, image, or other data inside the element.  
2. **Padding** → The space between the content and the border. Increases the clickable/visual area without affecting neighbors.  
3. **Border** → A visible line (or none) surrounding the padding and content.  
4. **Margin** → The space outside the border, separating the element from other elements.  

---

## Key Notes  

- **Total Element Width = content + padding + border + margin**  
- Margins can **collapse** (two vertical margins meeting = larger of the two, not sum).  
- Padding and border add *inside* the element’s dimensions, unless using `box-sizing: border-box`.  
- `box-sizing: border-box` makes width/height include content + padding + border (preferred for predictable layouts).  

---

## References  
- [The Odin Project – The Box Model](https://www.theodinproject.com/lessons/foundations-box-model)  
- [MDN: Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  

