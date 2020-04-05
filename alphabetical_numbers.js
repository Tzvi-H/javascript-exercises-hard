/*

Write a function that takes an array of integers between 0 and 19, and returns an array of those integers 
sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, 
sixteen, seventeen, eighteen, nineteen

Example:

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

*/

/* PEDAC
  - create a function that takes 2 number and returns -1,0,1 based on whether the first number's english representation comes first
  - call sort on the input array using the function from step 1
*/

const ZERO_TO_NINETEEN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
                    ];

function alphabeticPairSort(num1, num2) {
  if (ZERO_TO_NINETEEN[num1] < ZERO_TO_NINETEEN[num2]) {
    return -1;
  } else if (ZERO_TO_NINETEEN[num1] > ZERO_TO_NINETEEN[num2]) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(numbers) {
  return numbers.sort(alphabeticPairSort)
}
                    
console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]