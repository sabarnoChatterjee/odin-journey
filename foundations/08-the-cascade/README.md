The Cascade

Understanding how CSS resolves conflicts is key to writing predictable styles. The cascade is the mechanism that decides which rule is applied when multiple rules target the same element.

Key Concepts
1. Specificity

CSS assigns “weight” to selectors:

Inline styles > ID selectors > Class selectors > Type selectors

More selectors of the same kind = higher specificity

Combinators (>, +, ~, space) and the universal selector (*) add no specificity

👉 Rule of thumb: ID > Class > Type

2. Inheritance

Some properties (like typography: color, font-size, font-family) are inherited by default.
Others (like display, margin, border) are not.

Direct rules targeting an element always override inherited styles.

3. Rule Order

If specificity and inheritance don’t resolve the conflict, the last defined rule in the stylesheet wins.

