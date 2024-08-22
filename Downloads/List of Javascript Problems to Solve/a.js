// Array Questions

// 1. **Sum All Elements in an Array**  
//    - Task: Write a function that returns the sum of all numbers in an array.  
//    - Test: sumArray([1, 2, 3, 4, 5])  
//    - Expected Output: 15

function sumArray(arr){
return arr.reduce((sum,current) => sum+current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
// 2. **Find the Largest Number in an Array**  
//    - Task: Write a function that returns the largest number in an array.  
//    - Test: `findLargest([1, 5, 3, 9, 2])`  
//    - Expected Output: `9`

function findLargest(arr){
    return Math.max(...arr);
}
console.log(findLargest([1,5,3,9,2]));

// 3. **Find the Smallest Number in an Array**  
//    - Task: Write a function that returns the smallest number in an array.  
//    - Test: `findSmallest([1, 5, 3, 9, 2])`  
//    - Expected Output: `1`


function findSmallest(arr){
    return Math.min(...arr);
}
console.log(findSmallest([1, 5, 3, 9, 2]));

// 4. **Sort an Array in Ascending Order**  
//    - Task: Write a function that sorts an array in ascending order.  
//    - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[1, 2, 5, 5, 6, 9]`


function sortArray(arr){
    return arr.sort((a,b) => a-b);
}
console.log(sortArray([5, 2, 9, 1, 5, 6]));

// 5. **Sort an Array in Descending Order**  
//    - Task: Write a function that sorts an array in descending order.  
//    - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[9, 6, 5, 5, 2, 1]`

function sortArrayDescending(arr){
    return arr.sort((a,b) => b-a);
}
console.log(sortArrayDescending([5, 2, 9, 1, 5, 6]));

// 6. **Reverse an Array**  
//    - Task: Write a function that reverses the elements of an array.  
//    - Test: `reverseArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `[5, 4, 3, 2, 1]`

function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 7. **Check if an Array Contains a Specific Element**  
//    - Task: Write a function that checks if an array contains a specific element.  
//    - Test: `containsElement([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `true`


function containsElement(arr, Element){
    return arr.includes(Element);
}
console.log(containsElement([1, 2, 3, 4, 5], 3));

// 8. **Find the Index of a Specific Element in an Array**  
//    - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
//    - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `2`


function findIndex(arr, Element){
    return arr.indexOf(Element);
}
console.log(findIndex([1, 2, 3, 4, 5], 3));


// 9. **Remove Duplicates from an Array**  
//    - Task: Write a function that removes duplicate elements from an array.  
//    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//    - Expected Output: `[1, 2, 3, 4, 5]`

function removeDuplicates(arr,){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 10. **Merge Two Arrays**  
//     - Task: Write a function that merges two arrays into one.  
//     - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`

function mergeArrays(arr1,arr2){
return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 11. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns the intersection of two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`

function findIntersection(arr1,arr2){
return arr1.filter(element => arr2.includes(element));
}
console.log(findIntersection([1, 2, 3], [2, 3, 4]));

// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`

function findUnion(arr1,arr2){
return [...new Set([...arr1,...arr2])];

}

console.log(findUnion([1, 2, 3], [2, 3, 4]));

// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`

function isSorted(arr){
    for(let i=0; i< arr.length - 1;i++){
        if (arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isSorted([1,2,3,4,5]));

// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`


function findDifference(arr1, arr2){
    return arr1.filter(element => !arr2.includes(element));
}
console.log(findDifference([1, 2, 3], [2, 3, 4]));

// 15. **Rotate an Array by K Positions**  
//     - Task: Write a function that rotates an array by `k` positions.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

function rotateArray(arr, k){
k = k % arr.length;

return arr.slice(-k).concat(arr.slice(0 , -k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// 16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `8`


function maxDifference(arr){
    if(arr.length<2) return 0;

    let minElement =  arr[0];
    let maxDiff = 0;

    for(let i=1; i<arr.length;i++){
let Diff = arr[i] - minElement;

if(Diff > maxDiff) {
    maxDiff = Diff;
}
if(arr[i] < minElement){
    minElement = arr[i];
}
    }
return maxDiff;

}

console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]));

// 17. **Find the Second Largest Element in an Array**  
//     - Task: Write a function that returns the second largest element in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`

function secondLargest(arr){
    if(arr.length<2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i< arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest=== -Infinity ? null : secondLargest;
}

console.log(secondLargest([1, 2, 3, 4, 5]));

// 18. **Find the Pair of Elements with the Maximum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
//     - Test: `maxSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[4, 5]`


function maxSumPair(arr){
    if(arr.length < 2) return null;

    arr.sort((a,b) => a-b);

    return [arr[arr.length - 2], arr[arr.length - 1]];
}
console.log(maxSumPair([1, 2, 3, 4, 5]));

// 19. **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]`

function minSumPair(arr){
    if (arr.length < 2) return null;

    arr.sort((a,b) => a - b);

    return [arr[0], arr[1]];
}

console.log(minSumPair([1, 2, 3, 4, 5]));

// 20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`

function moveZeros(arr){
    let result = [];
    let zeroCount = 0;

    for(let i=0; i< arr.length;i++){
        if(arr[i] !== 0){
            result.push(arr[i]);
        }else {
            zeroCount++;
        }
    }
    for(let i=0;i < zeroCount;i++){
        result.push(0);
    }
    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`

function countFrequency(arr){
    const frequency = {};
    for(let num of arr){
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    return frequency;
}
console.log(countFrequency([1, 2, 2, 3, 3, 3]));

// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3


function mostFrequent(arr){
    const frequency = {};

    let maxCount = 0;
    let mostFrequentElement = null;



    for(let num of arr){
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequentElement = num;
        }

    }
    return mostFrequentElement;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3]));

// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`


function longestIncreasingSubsequence(arr){
    if (arr.length === 0) return [];

    // Create an array to store the length of the LIS ending at each index
    let lis = new Array(arr.length).fill(1);
    // Create an array to store the previous index for reconstructing the LIS
    let previousIndex = new Array(arr.length).fill(-1);

    // Compute the length of the LIS ending at each index
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
                previousIndex[i] = j;
            }
        }
    }

    // Find the index of the maximum length of LIS
    let maxLength = Math.max(...lis);
    let index = lis.indexOf(maxLength);

    // Reconstruct the LIS
    let sequence = [];
    while (index !== -1) {
        sequence.unshift(arr[index]);
        index = previousIndex[index];
    }

    return sequence;
}

// Test the function
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));

// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    
    // Insert all numbers into a set
    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            // Update the maximum length
            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}

// Test the function
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Expected Output: 4

