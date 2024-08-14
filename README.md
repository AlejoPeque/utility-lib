# Utility Lib Primitives & Objects 📚

This utility library is designed to facilitate the handling of objects and primitives in TypeScript. It provides a versatile set of functions for common operations such as filtering, combining and organizing data. Use cases include:

- **Filtering by ID:** Allows you to select specific items from an array of objects based on their unique identifiers.
- **Object Merge:** Facilitates the combination of two or more objects into one, merging their properties and values in an intuitive way.
- **Sort by ID:** Provides the ability to sort arrays of objects by their identifiers, ensuring an organized and consistent data structure.
- **Transform Objects to JSON:** Converts an object literal into a formatted JSON string, improving readability and data presentation.

Ideal for simplifying repetitive tasks and improving code readability, this library focuses on providing fast and efficient solutions for data handling.

## Instalacion 📦

```CMD
npm install utility-primitive-object
```

## Uso 🎢

**filterById**

```TypeScript
import { filterById } from 'utility-primitive-object'

const object = [{ id: 2 }, { id: 1 }, { id: 3 }]

const res = filterById(object, "id", 2) // res = [{ id: 2 }]
```

**merge**

```TypeScript
// Example 1
import { merge } from 'utility-primitive-object'

const obj1 = { foo: 'bar' }
const obj2 = { fob: 'baz' }

merge(obj1, obj2) // { foo: 'bar', fob: 'baz' }

// Example 2
const obj3 = { foo: 'bar' }
const obj4 = { foo: 'baz' }

const res = merge(obj3, obj4) // { foo: 'baz' }
```

**orderById**

```TypeScript
import { orderById } from 'utility-primitive-object'

const obj = [{ id: 2 }, { id: 1 }, { id: 3 }]

const res = orderById(obj, 'id') // asc
// [
//      { id: 1 },
//      { id: 2 },
//      { id: 3 }
// ]

const res2 = orderById(obj, 'id', false) // des
// [
//     { id: 3 },
//     { id: 2 },
//     { id: 1 }
// ]
```

**prettyPrint**

```TypeScript
import { prettyPrint } from 'utility-primitive-object'

res = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

prettyPrint(res)
/*
    '{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }'
*/
```

### Check Types 🧐

| Function                   | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `isArray(value)`           | Check if the given value is an array.          |
| `isNullOrUndefined(value)` | Check if the given value is null or undefined. |
| `isNumber(value)`          | Check if the given value is a number.          |
| `isString(value)`          | Check if the given value is a string.          |
| `isObject(value)`          | Check if the given value is a object.          |
| `isEmpty(value)`           | Check if the given value is empty              |

---

Thanks for using this library! 🚀
