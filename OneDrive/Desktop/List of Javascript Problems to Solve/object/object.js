// /* Object Questions
//  **Create a Simple Object**
//  - Task: Create an object representing a person with properties `name`, `age`, and `city`/*

 function createPerson(Name,age,city){
    return {
        Name: Name,
        age : age,
        city : city
    };
 }

 const person = createPerson("john",25,"New york");
 console.log(person);

//  2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.

function getProperty(obj,property){
    return obj[property];
}
const obj ={name:"Alice",age:30 };
console.log(getProperty(obj,'name'));

// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.

function newProperty(obj,key,value){
    obj[key] = value;
}
const car = { brand: 'Toyota', model: 'Corolla'};
newProperty(car, 'year' , 2020);
console.log(car);

// 4.**Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
// ```javascript
// const user = { username: 'john_doe', password: '12345' };
// deleteProperty(user, 'password');
// console.log(user);
// ```
// - Expected Output: `{ username: 'john_doe' }`

function username(obj,key){
    delete obj[key];
}
const user = {name:"john_doe",password:'12345'};
username(user, 'password');
console.log(user);

// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`
function hasProperty(obj,key){
    return key in obj
}
const object = { name: 'Alice', age: 30 };
console.log(hasProperty(obj,'age'));

// 6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
const obj1 = { a: 1, b: 2 };   
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1,obj2));

// 7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'
//      ```

function cloneObject(obj){
    return structuredClone(obj);
}
const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
const clone = cloneObject(original);
clone.details.city = 'LA';

console.log(original.details.city);
console.log(clone.details.city);


// 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York
//      ```

function printProperties(obj){
    for (const key in obj){
        if (obj.hasOwnProperty(key)){
        console.log(`${key}: ${obj[key]}`)
        }
    }
}
const u = { name: 'John', age: 30, city: 'New York' };
printProperties(u);



// 9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`


function Count(obj){ 
    return Object.keys(obj).length;
}
const o = { name: 'Alice', age: 30, city: 'NYC' };
    console.log(Count(o))

    // 10. **Convert Object to Array of Keys**
    // - Task: Write a function that converts an object to an array of its keys.
    // - Test:
    //   ```javascript
    //   const obj = { name: 'Alice', age: 30, city: 'NYC' };
    //   console.log(objectKeysToArray(obj));
    //   ```
    // - Expected Output: `['name', 'age', 'city']`



function objectKeysToArray(obj){
    return Object.keys(obj);
}    
  
const objectto = { name: 'Alice', age: 30, city: 'NYC' };
 console.log(objectKeysToArray(objectto));


//  11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`

function objectValuesToArray(obje){
    return Object.values(obje);
}
const obje = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectValuesToArray(obje));

// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`

function arrayToObject(arr) {
    return arr.reduce((acc, current) => {
        acc[current.key] = current.value;
        return acc;
    }, {});
}
const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
 console.log(arrayToObject(arr));


//  13. **Group Objects by a Property**
//     - Task: Write a function that groups an array of objects by a specific property.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 30 }
//       ];
//       console.log(groupBy(users, 'age'));
//       ```
//     - Expected Output:
//       ```javascript
//       {
//         20: [{ name: 'Bob', age: 20 }],
//         30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//       }
      

function groupBy(arr,property){
    return arr.reduce((acc,obj) => {
        const key = obj[property];
        if(!acc[key]){
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const users = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 20 },
{ name: 'Charlie', age: 30 }
];
console.log(groupBy(users, 'age'));


// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`



function findMax(arr,prop){
    // Return null if the array is empty
    if (arr.length === 0) return null;
// Initialize the first object as the max object
let maxObj = arr[0];

for(let i=1; i < arr.length;i++){
    if (arr[i][prop] > maxObj[prop]){
        maxObj = arr[i];
    }
 
}

return maxObj;
}

const use = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 20 },
{ name: 'Charlie', age: 35 }
];
console.log(findMax(use, 'age'));


// 15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`


function sumProperty(arr, prop){
    return arr.reduce((sum,currentObj) => {
        return sum + (currentObj[prop] || 0);
    }, 0);
}
const items = [
{ name: 'item1', price: 10 },
{ name: 'item2', price: 15 },
{ name: 'item3', price: 20 }
];
console.log(sumProperty(items, 'price'));
