// String Questions

// 1. **Reverse a String**
//    - Task: Write a function that reverses a given string.
//    - Test:
//      ```javascript
//      console.log(reverseString("hello"));
//      ```
//    - Expected Output: `"olleh"`

// let mthod
let str = "hello";
let reversed = Array.from(str).reverse().join('');
console.log(reversed);

// function method

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

// 2. **Check if a String is a Palindrome**
//    - Task: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
//    - Test:
//      ```javascript
//      console.log(isPalindrome("racecar"));
//      console.log(isPalindrome("hello"));
//      ```
//    - Expected Output:
//      ```javascript
// true
// false
// using string reversed method
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome("hello"));


// using for a loop

function isPalindrom(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrom("racecar"));
console.log(isPalindrom("hello"));



// 3. **Count the Number of Vowels in a String**
//    - Task: Write a function that counts the number of vowels (`a, e, i, o, u`) in a given string.
//    - Test:
//      ```javascript
//      console.log
// (countVowels("hello world"));
//      ```
//    - Expected Output: `3`



function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world"));

// 4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`



function firstNonRepeatedCharacter(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }
    return null;
}
console.log(firstNonRepeatedCharacter("swiss"));

// 5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`


function countWords(str){
    const words = str.trim().split(/\s+/);
    return words.length;
}
console.log(countVowels('This is a test string'));

// 6. **Check if Two Strings are Anagrams**
//    - Task: Write a function that checks if two strings are anagrams (contain the same characters in different orders).
//    - Test:
//      ```javascript
//      console.log(areAnagrams("listen", "silent"));
//      console.log(areAnagrams("hello", "world"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

function areAnagrams(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');
return sortedStr1 === sortedStr2; 


}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));



// 7. **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`


function replaceSpaces(str){
    return str.replace(/ /g, '-');
}
console.log(replaceSpaces('Hello World'));


// 8. **Convert a String to Title Case**
//    - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
//    - Test:
//      ```javascript
//      console.log(toTitleCase("this is a test string"));
//      ```
//    - Expected Output: `"This Is A Test String"`


function toTitleCase(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(toTitleCase("this is a test string"));

// 9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345"));
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

function isNumeric(str){
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345"));
console.log(isNumeric("123a5"));

// 10. **Remove Duplicates Characters from a String**
//     - Task: Write a function that removes duplicate characters from a string.
//     - Test:
//       ```javascript
//       console.log(removeDuplicates("programming"));
//       ```
//     - Expected Output: `"progamin"`


function removeDuplicates(str){
    const seen = new Set();
    let result = '';

    for(const char of str){
        if(!seen.has(char)){
            result += char
            seen.add(char);
        }
    }

return result;
}

console.log(removeDuplicates('programming'));


// 11. **Find the Longest Word in a String**
//     - Task: Write a function that finds the longest word in a string.
//     - Test:
//       ```javascript
//       console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//       ```
//     - Expected Output: `"jumped"`


function findLongestWord(sentence){
const words = sentence.split(' ');

let longestWord = '';

for(const word of words){
    if(word.length > longestWord.length){
        longestWord = word;
    }
}
return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// 12. **Capitalize the First Letter of Each Word in a String**
//     - Task: Write a function that capitalizes the first letter of each word in a string.
//     - Test:
//       ```javascript
//       console.log(capitalizeFirstLetters("javascript is fun"));
//       ```
//     - Expected Output: `"Javascript Is Fun"`


function capitalizeFirstLetters(str){
const words = str.split(' ');
const capitalizeWords = words.map(word=> {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
return capitalizeWords.join(' ');

}

console.log(capitalizeFirstLetters("javascript is fun"));

// 13. **Repeat a String N Times**
//     - Task: Write a function that repeats a given string `n` times.
//     - Test:
//       ```javascript
//       console.log(repeatString("abc", 3));
//       ```
//     - Expected Output: `"abcabcabc"`


function repeatString(str,n){
    return str.repeat(n);
}
console.log(repeatString("abc", 3));

// 14. **Check if a String Contains a Substring**
//     - Task: Write a function that checks if a string contains a given substring.
//     - Test:
//       ```javascript
//       console.log(containsSubstring("hello world", "world"));
//       console.log(containsSubstring("hello world", "planet"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

function containsSubstring(str,substring){
return str.includes(substring);
}
console.log(containsSubstring("hello world", "world"));
console.log(containsSubstring("hello world", "planet"));

// 15. **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`

function stringToWords(str){
    return str.split(' ');
}
console.log(stringToWords("This is a test"));

// 16. **Truncate a String**
//     - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
//     - Test:
//       ```javascript
//       console.log(truncateString("This is a long string", 10));
//       ```
//     - Expected Output: `"This is a..."`

function truncateString(str, length){
if(str.length > length){
return str.slice(0,length)+'...';

}else {
    return str;
}
}
console.log(truncateString("This is a long string", 10));

// 17. **Check if a String Starts with a Specific Substring**
//     - Task: Write a function that checks if a string starts with a given substring.
//     - Test:
//       ```javascript
//       console.log(startsWith("hello world", "hello"));
//       console.log(startsWith("hello world", "world"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```


function startsWith(str, substring){
    return str.startsWith(substring);
}
console.log(startsWith("hello world", "hello"));
console.log(startsWith("hello world", "world")); 


// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

function endsWith(str, substring){
    return str.endsWith(substring);
}
console.log(endsWith("hello world", "world"));
console.log(endsWith("hello world", "hello"));

// 19. **Insert a Substring at a Specific Position in a String**
//     - Task: Write a function that inserts a substring at a specific position in a string.
//     - Test:
//       ```javascript
//       console.log(insertSubstring("Hello World", "Beautiful ", 6));
//       ```
//     - Expected Output: `"Hello Beautiful World"`


function insertSubstring(original,substring,position){
if(position < 0 || position > original.length){
    throw new Error("position out of bounds");

}
return original.slice(0,position) + substring + original.slice(position);
}
console.log(insertSubstring("Hello World", "Beautiful ", 6));

// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`


function removeSubstring(original, substring){
const regex = new RegExp(substring, 'g');

return original.replace(regex, '');
} 
console.log(removeSubstring("This is a test. This is only a test.", "test"));

