/*
Problem
  - given an array
  - return a new array where the first element is now the last element
  - do not modify input array
  - if array is empty => return empty array
- Examples
  - []      => []
  - [1]     => [1]
  - [1,2]   => [2, 1]
  - [1,2,3] => [2,3,1]
Algorithm
  - given an input array
  - if input is not an array
    - return undefined  
  - if array is empty
    - return an empty array  
  - get a copy from the array starting from index 1,
  - return the copy concatenated with the element from the input array at index 1
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  
  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
