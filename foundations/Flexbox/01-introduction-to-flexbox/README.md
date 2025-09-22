# Introduction to Flexbox

## Overview
Flexbox (Flexible Box Layout) is a CSS layout model designed to simplify alignment, spacing, and distribution of items within a container. It provides more control compared to older techniques like floats or inline-blocks.

## Key Concepts
- **Flex Container** → created by `display: flex;`.  
- **Flex Items** → direct children of the flex container.  
- **Axes**:
  - Main Axis → defined by `flex-direction` (row, column).  
  - Cross Axis → perpendicular to the main axis.  

## Alignment
- `justify-content` → aligns items along the **main axis**.  
- `align-items` → aligns items along the **cross axis**.  
- `align-self` → overrides alignment for a single item.  
- `gap` → spaces flex items without using margins.  

## Flex Behavior
- `flex-wrap` → allows items to wrap onto multiple lines.  
- `flex-grow`, `flex-shrink`, `flex-basis` → control how items expand, shrink, or set their default size.  

## Why Flexbox?
- Easier vertical and horizontal centering.  
- Flexible and responsive layouts.  
- Cleaner, more predictable spacing compared to floats.  

---
