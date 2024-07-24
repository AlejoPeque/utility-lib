# Utility Lib Primitives & Objects
desc
## Instalacion

```CMD
npm install utility-primitive-object
```

## Uso

**filterById**
```Javascript
import { filterById } from 'utility-lib-p-o'

const object = [{ id: 2 }, { id: 1 }, { id: 3 }]

const res = filterById(object, "id", 2) // res = [{ id: 2 }]
```

**merge**
```Javascript
// Example 1
import { merge } from 'utility-lib-p-o'

const obj1 = { foo: 'bar' }
const obj2 = { fob: 'baz' }

merge(obj1, obj2) // { foo: 'bar', fob: 'baz' }

// Example 2
const obj3 = { foo: 'bar' }
const obj4 = { foo: 'baz' }

const res = merge(obj3, obj4) // { foo: 'baz' }
```

**orderById**
```Javascript
import { orderById } from 'utility-lib-p-o'

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
```Javascript
import { prettyPrint } from 'utility-lib-p-o'

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

### Check Types

Function                   | Description
---------------------------|-----------------------------------------
`isArray(value)`           | Check if the given value is an array.
`isNullOrUndefined(value)` | Check if the given value is null or undefined.
`isNumber(value)`          | Check if the given value is a number.
`isString(value)`          | Check if the given value is a string.
`isObject(value)`          | Check if the given value is a object.
`isEmpty(value)`           | Check if the given value is empty  