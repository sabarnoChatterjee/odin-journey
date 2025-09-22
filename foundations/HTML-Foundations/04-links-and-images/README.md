# Links and Images

## About
This lesson covers adding hyperlinks and images to a webpage.

## What I Learned
- Difference between **absolute** (full URL) and **relative** (local file) links
- How to link between pages in the same project
- Using the `target="_blank"` attribute to open links in a new tab
- Why we add `rel="noopener noreferrer"` when using `target="_blank"`
  - **noopener** → prevents the new tab from controlling the original page via JavaScript (security)
  - **noreferrer** → hides the referring page URL from the new site (privacy)
- Adding images with `<img>` and descriptive `alt` text
- Creating clickable (linked) images

# Links and Images — Extended Notes

This section expands on the basics by covering **image formats** commonly used on the web, and the different ways of writing **paths/links** in HTML.

---

## 🖼️ Image Formats: JPG vs GIF vs PNG vs SVG

- **JPG (JPEG)**
  - Best for: Photographs and images with many colors/gradients
  - Pros: Small file size (due to lossy compression), loads fast
  - Cons: Compression can cause visible quality loss; not good for sharp edges, text, or transparency
  - Typical use: Background photos, profile pictures, product photography

- **GIF**
  - Best for: Simple animations, very limited color palette
  - Pros: Supports animation, simple graphics
  - Cons: Limited to 256 colors; larger file sizes compared to modern alternatives
  - Typical use: Old-school memes, small animated icons
  - ⚠️ Note: For modern animations, use video formats or SVG/CSS animations instead

- **PNG**
  - Best for: Graphics needing transparency, logos, UI elements
  - Pros: Lossless compression (no quality loss), supports transparency
  - Cons: Larger file size than JPG for photos
  - Typical use: Logos, screenshots, images with text, graphics with sharp edges

- **SVG**
  - Best for: Vector graphics that need to scale without losing quality
  - Pros: Infinite scalability (no pixelation), small file size for simple graphics, can be styled/animated with CSS & JavaScript
  - Cons: More complex for photographs; not suitable for detailed images
  - Typical use: Icons, logos, illustrations, diagrams

---

## 🌐 Paths & Links in HTML

When linking files or images, there are three main ways to write paths:

1. **Absolute Path**
   - Full URL that includes protocol and domain.
   - Example:  
     ```html
     <img src="https://example.com/images/photo.jpg" alt="Photo">
     ```
   - Pros: Always works regardless of where your HTML is hosted
   - Cons: Breaks if the domain or folder structure changes

2. **Relative Path**
   - Path relative to the current file’s location.
   - Example:  
     ```html
     <img src="./images/photo.jpg" alt="Photo">
     ```
   - Pros: Works well for local projects; keeps files portable
   - Cons: Can get confusing in deeply nested folders (lots of `../`)

3. **Root-Relative Path**
   - Starts from the root of the project/website, not the current file.
   - Example:  
     ```html
     <img src="/assets/images/photo.jpg" alt="Photo">
     ```
   - Pros: Easier to manage large projects — same path works from any page
   - Cons: Won’t work in local filesystem unless served from a server root (e.g., `localhost` setup)

---

## ✅ Key Takeaways

- Choose image format based on the content:
  - **JPG** for photos  
  - **PNG** for transparency/sharp edges  
  - **SVG** for scalable graphics  
  - **GIF** (legacy) for simple animations
- Use **relative paths** in small projects, and consider **root-relative paths** for larger websites.
- Use **absolute paths** only when linking to external resources.



