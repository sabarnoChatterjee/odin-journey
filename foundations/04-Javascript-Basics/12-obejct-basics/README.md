# Object Basics – Notes

I learned the core ideas of how objects work in JavaScript. Objects are collections of key–value pairs and allow grouping of related information together. This lesson helped me understand objects as a central data structure in the language.

---

## What I Learned

### Creating Objects
Objects are created using curly braces. They are used to represent entities with multiple attributes in one place.

### Accessing Properties
Object properties can be accessed in two ways: dot notation and bracket notation. Bracket notation allows for dynamic property access when the property name is stored in a variable.

### Adding and Modifying Properties
Properties can be added or updated at any time after the object is created. Objects in JavaScript are flexible and not restricted to fixed structures.

### Deleting Properties
Properties can be removed from objects using the delete operation, which makes the object adapt dynamically as needed.

### Property Value Shorthand
When property names are the same as variable names, shorthand syntax can be used to create cleaner and more concise objects.

### Property Names
Property keys are strings by default, even if written as numbers. Symbols can also be used as keys for unique property identifiers.

### Checking Property Existence
Trying to access a missing property results in undefined. The `in` operator can be used to explicitly check if a property exists in an object.

### Iterating Over Properties
The `for...in` loop allows iteration over all enumerable properties of an object, providing both keys and access to their values.

### Objects as References
Objects are stored and passed by reference. Copying an object variable does not duplicate the object itself but instead creates another reference to the same underlying object.

---

## Key Takeaways
- Objects group related data and represent entities in a flexible way.  
- They can be created, modified, and extended freely, making them dynamic data structures.  
- Understanding dot vs bracket notation is important for both static and dynamic property access.  
- Objects are reference-based, meaning changes through one variable reflect in all references.  
- These basics form the foundation for more advanced topics like object methods, prototypes, and classes.
