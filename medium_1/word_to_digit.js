/*
Problem
  - Given a string of words
  - replace any occurence of a number string with its digit character
  - 'zero' => '0'
  - 'one'  => '1', etc

  - input  => string of words
  - output => string of words
Examples
  - 'hello one two, three.' => 'hello 1 2, 3.'
Data Structure
  - an array of number words ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
Algorithm
  - given a string of words
  - create an array of all number words
  - loop over number words, for each number word and its index
    - replace all occurences of the number word inside the input string with the current index
  return the string
Questions  
*/

function wordToDigit(words) {
  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  numberWords.forEach((numberWord, index) => {
    let regex = new RegExp(numberWord, 'g');
    words = words.replace(regex, index);
  })
  return words;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."