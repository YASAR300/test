// 1. **Print "Hello, World!"**  
//    - Task: Write a function that prints "Hello, World!" to the console

function printHelloWorld(){

    console.log("Hello world");
}
printHelloWorld();


// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`


function sum(a,b){
    
    return a+b;
}
console.log(sum(3,5));

// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`

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

// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`

function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(4));

// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`

function factorial(n){
    if(n<0) return "invalid input";
    let result = 1;
    for (let i=1;i<=n;i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))

// 6. **Reverse a String**  
//    - Task: Write a function that takes a string and returns it reversed.  
//    - Test: `reverseString('hello')`  
//    - Expected Output: `'olleh'`

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test the function
console.log(reverseString('hello'));
// 7. **Check for Palindrome**  
//    - Task: Write a function that checks if a given string is a palindrome.  
//    - Test: `isPalindrome('madam')`  
//    - Expected Output: `true`

function isPalindrome(str) {
    const normalizedStr = str.toLowerCase();  
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome('madam'));  

// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`



function findMin(a,b,c,d,e){
    let smallest = a;
    if(b<smallest){
        smallest = b;
    }
    if(c<smallest){
       smallest  =  c ;
    }
    if(d<smallest){
        smallest = d;
    }
    if(e<smallest){
        smallest = e;
    }
    return  smallest;
}
console.log(findMin(3,1,4,1,5))


// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}


console.log(sortArray([3, 1, 4, 1, 5]));

// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true`

function containsSubstring(str,substring){
return str.includes(substring);
}
console.log(containsSubstring('hello world', 'world'));

// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`

function sumArray(arr){
    return arr.reduce((sum, num ) => sum + num,0);
}
console.log(sumArray([1,2,3,4,5]));

// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`

function fibonacci(n){
    if(n<=0) return [];
    if(n === 1) return 0;
    let fib = [0,1];
    for (let i=2;i< n;i++){
        fib.push(fib[i-1]+fib[i-2]);

    }
    return fib
}
console.log(fibonacci(5));


// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`

function isPrime(num){
    if(num<=1)  return false;
for(let i= 2;i<= Math.sqrt(num) ;i++){
    if (num % i ===0) return false;
}
return true;

}
console.log(isPrime(7));


// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`

// function countVowels(str){
//     const vowels = 'aeiouAEIOU';
//     return [...str].filter(char>=vowels.includes(char)).length;
// }
// countVowels('hello');
// countVowels('hello');
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}
console.log(countVowels('hello'));

// 15. **Find the Index of an Element in an Array**  
//     - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
//     - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `2`

function findIndex(arr,Element){
    return arr.indexOf(Element);
}
console.log(findIndex([1,2,3,4,5],3));


// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`



function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4,5]));


// 17. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns an array of the common elements in two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`

function findIntersection(arr1,arr2){
return arr1.filter(value => arr2.includes(value));
}

console.log(findIntersection([1, 2, 3], [2, 3, 4]));


// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`


function areAnagrams(str1,str2){
    const nor = str => str.split('').sort().join('');
    return nor(str1) === nor(str2);
}

console.log(areAnagrams('listen', 'silent'));



// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`


function capitalizeWords(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

console.log(capitalizeWords('hello world'));

// 20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
//     - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`

function flattenArray(arr){
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

// 21. **Generate a Random Number within a Range**  
//     - Task: Write a function that generates a random number between a given range.  
//     - Test: `randomNumber(1, 10)`  
//     - Expected Output: `A random number between 1 and 10`

function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

console.log(randomNumber(1,10));


// 22. **Check if a String is a Valid Email**  
//     - Task: Write a function that checks if a given string is a valid email address.  
//     - Test: `isValidEmail('test@example.com')`  
//     - Expected Output: `true`


function isValidEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    return regex.test(email);
}

console.log(isValidEmail('test@example.com'));


// 23. **Convert Celsius to Fahrenheit**  
//     - Task: Write a function that converts a temperature from Celsius to Fahrenheit.  
//     - Test: `celsiusToFahrenheit(0)`  
//     - Expected Output: `32`


function celsiusToFahrenheit(celsius){
    return (celsius * 4/5) + 32;
}

console.log(celsiusToFahrenheit(0));


// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`


function removeElement(arr, element){
    return arr.filter(e => e !== element);
}
console.log(removeElement([1, 2, 3, 4, 5], 3));

// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`


function secondLargest(arr){
    const  uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a,b) => b-a);
    return uniqueArr[1];
}
console.log(secondLargest([1, 2, 3, 4, 5]));

// 26. **Find the Longest Word in a String**  
//     - Task: Write a function that returns the longest word in a string.  
//     - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
//     - Expected Output: `'jumped'`


function longestWord(str){
    const words = str.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord('The quick brown fox jumped over the lazy dog'));


// 27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = n* (n+1) / 2;
    const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum - actualSum;
}

console.log(findMissingNumber([1,2,4,5,6]));

// 28. **Calculate the GCD of Two Numbers**  
//     - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
//     - Test: `gcd(12, 18)`  
//     - Expected Output: `6`


function gcd(a,b){
    if (b === 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(12,18));

// 29. **Calculate the LCM of Two Numbers**  
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
//     - Test: `lcm(4, 6)`  
//     - Expected Output: `12`



function lcm(a,b){
    return (a*b) / gcd(a,b);
}
console.log(lcm(4,6));

// 30. **Check for Balanced Parentheses**  
//     - Task: Write a function that checks if a string has balanced parentheses.  
//     - Test: `isBalanced('()')`  
//     - Expected Output: `true`


function isBalanced(str){
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    for(let char of str){
        if(pairs[char]){
            stack.push(char);
        } else if (Object.values(pairs).includes(char)){
            if (char !== pairs[stack.pop()]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalanced('()'));


// 31. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`


function rotateArray(arr, k){
    k = k %  arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));