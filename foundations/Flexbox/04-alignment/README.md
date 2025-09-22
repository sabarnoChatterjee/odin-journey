# Alignment

This lesson covers how to position flex items inside a container, both horizontally and vertically, using a few core properties of Flexbox.

---

## Key Concepts

- `justify-content` → aligns items along the main axis (horizontal by default): e.g. `center`, `space-between`, `space-around`. :contentReference[oaicite:0]{index=0}  
- `align-items` → aligns items along the cross axis (vertical alignment when flex-direction is row). :contentReference[oaicite:1]{index=1}  
- `flex-direction` can change which axis is main / cross, which affects how alignment properties behave. :contentReference[oaicite:2]{index=2}  
- **Gap** → adds consistent space between flex items within a flex container without needing to add margins to each item. It’s safer and cleaner. Works well in modern browsers. :contentReference[oaicite:3]{index=3}  

---

## Why It’s Useful

- Helps with layout control & spacing inside containers  
- Makes it easier to center content both ways (horizontally & vertically)  
- Reduces need for messy margin hacks when spacing between items  

---

## Practice Suggestions

- Try using different values of `justify-content` (center / space-between / space-around) to see how items shift along the main axis  
- Use `align-items: center` to vertically center items inside a flex container  
- Add `gap` (e.g. `gap: 8px`) to a flex container and observe spacing between items  
- Experiment with `flex-direction: column` and see how `justify-content` & `align-items` roles swap  

---

## References

- [The Odin Project – Alignment (Flexbox)](https://www.theodinproject.com/lessons/foundations-alignment) :contentReference[oaicite:4]{index=4}  
- MDN docs on `justify-content`, `align-items`, and `gap` properties in Flexbox  

