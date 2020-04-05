/*
Multiply All Pairs
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
*/

/* PEDAC
  - 1. set an empty array (result)
  - 2. loop over the first array
    - 1. loop over the second array
    - 2. push into result the num from array 1 * the num from array 2
  - 3. return result sorted  
*/

function multiplyAllPairs(pair1, pair2) {
  let results = [];

  pair1.forEach(num1 => {
    pair2.forEach(num2 => {
      results.push(num1 * num2);
    })
  })

  return results.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
