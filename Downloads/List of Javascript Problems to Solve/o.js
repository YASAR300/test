// 1
function createPerson(name,age,city) {
return{
    name:name,
    age:age,
    city:city
}
}
const person = createPerson("John", 25, "New York");
     console.log(person);

// 2
function getProperty(obj,property){
    return obj[property];
}
const obj = { name: 'Alice', age: 30 };
console.log(getProperty(obj, 'name'));


// 3

function addProperty(obj,key,value){
    obj[key]= value;
}
const car = { brand: 'Toyota', model: 'Corolla' };
addProperty(car, 'year', 2020);
console.log(car);


// 4

function deleteProperty(obj,key){
    delete obj[key];
}
const user = { username: 'john_doe', password: '12345' };
deleteProperty(user, 'password');
console.log(user);


// 5


function hasProperty(obj,key){
    return key in obj
}
const o = { name: 'Alice', age: 30 };
     console.log(hasProperty(obj, 'age'));

//    6

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2));


// 7

function cloneObject(obj){
    return structuredClone(obj);
}

const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
     const clone = cloneObject(original);
     clone.details.city = 'LA';
     console.log(original.details.city);
     console.log(clone.details.city);

// 8

function printProperties(obj){
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
        console.log(`${key}: ${obj[key]}`);
        }
    }

}
const u = { name: 'John', age: 30, city: 'New York' };
printProperties(u)


// 9

function Count(obj){
    return Object.keys(obj).length;
}
const ob = { name: 'Alice', age: 30, city: 'NYC' };
console.log(Count(ob));

// 10

function objectKeysToArray(object){
    return Object.keys(object);
}
const object = { name: 'Alice', age: 30, city: 'NYC' };
      console.log(objectKeysToArray(object));

    //   11

function objectValuesToArray(obje){
    return Object.values(obje);
}
const obje = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectValuesToArray(obje));


// 12

function arrayToObject(arr){
    return arr.reduce((acc,current) => {
        acc[current.key] = current.value;
        return acc;
    },{});
}
const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
console.log(arrayToObject(arr));
// 13

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



//   14


function findMax(arr, prop){
    if (arr.length === 0) return null;
    let maxObj = arr[0];
    for(let i=0; i < arr.length;i++){
        if(arr[i][prop] > maxObj[prop]){
            maxObj = arr[i];
        }
    }
    return maxObj;
}
const use =  [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 }
  ];
  console.log(findMax(use, 'age'))




//   15


function sumProperty(arr, prop){
    return arr.reduce((sum,currentObj) =>{
        return sum + (currentObj[prop] ||0);
    },0);
}
const items = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 15 },
    { name: 'item3', price: 20 }
  ];
  console.log(sumProperty(items, 'price'));
// 3

function findLargest(a,b,c){
    let largest = a;
    if(b>largest){
        largest = b;
    }
    if(c>largest){
       largest  =  c ;
    }
    return  largest;
}
console.log(findLargest(2,8,5))


function sum(a,b){
    
    return a+b;
}
console.log(sum(3,5));