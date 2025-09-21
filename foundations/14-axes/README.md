# Axes

In a flex container, layout is built around two axes: the **main axis** and the **cross axis**. Changing `flex-direction` switches how items are laid out.

---

## What You’ll Learn

- What the *main axis* and *cross axis* are  
- How `flex-direction: row` vs `column` affects layout  
- How `flex-basis` works differently depending on the axis  
- Why items collapse if basis/default sizing isn’t set when switching directions  

---

## Key Concepts

- Default direction for flex is `row` (main axis is horizontal).  
- Setting `flex-direction: column` makes the main axis vertical.  
- `flex-basis` refers to width when direction is `row`, height when `column`.  
- The shorthand `flex: 1` sets `flex-basis` to `0`, which may lead to collapse if no dimension is given.

---

## References

- [The Odin Project – Axes](https://www.theodinproject.com/lessons/foundations-axes) :contentReference[oaicite:0]{index=0}  
- MDN documentation on Flexbox layout and `flex-direction`  

