/*
Problem
  - Given a string
  - return an object with 3 properties, lowercase, uppercase, and neither
  - each property's value should be the percentage of the instances of the occurences of that key descriptor
  - values should be a string with a fixed decimal width of 2

  input  => string
  output => object representing occurences in percentage
Examples
  =  'abCdef 123'
  => length               => 10
  => lowercase occurences => 5 => 50.00
  => uppercase occurences => 1 => 10.00
  => neither occurences   => 4 => 40.00
Data Structure
  - object
Algorithm
  - given a string
  - store the stringLength
  - get the count of lowercase letters (/[a-z]/g)
  - get the count of uppercase letters (/[A-Z]/g)
  - get the count of character that are neither (/[^a-z]ig/)
  - return an object with the following properties
    - lowercase => (lowercaseCount / stringLength * 100) converted into a string with 2 digits after the decimal
    - uppercase => (uppercaseCount / stringLength * 100) converted into a string with 2 digits after the decimal
    - neither => (neitherCount / stringLength * 100) converted into a string with 2 digits after the decimal
Questions
*/

function letterPercentages(string) {
  let length = string.length;

  let lowerCount = (string.match(/[a-z]/g) || []).length;
  let upperCount = (string.match(/[A-Z]/g) || []).length;
  let neitherCount = (string.match(/[^a-z]/ig) || []).length;

  return {
    lowercase: (lowerCount / length * 100).toFixed(2),
    uppercase: (upperCount / length * 100).toFixed(2),
    neither: (neitherCount / length * 100).toFixed(2)
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }