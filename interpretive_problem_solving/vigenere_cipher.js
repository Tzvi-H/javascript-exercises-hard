/*
Problem 
  - Given a text and a keyword, encrypt the text using the keyword's characters.
  - Each character in the keyword is a letter that corresponds to a shift value,
    'a' is 0, 'b' is 1 .., 'z' is 25. case is insensitive
  - For each letter in the text, shift over with the current shift value of the keyword, and move to the next
    shift value in the keyword for the next character in the text.
  - if the current character in the text is not a letter, you can use that letter as is and don't move the shift value forward.
  - if the new shifted character is past 'z, then wrap around to the front of the alphabet.
  - character should keep their original case
  Input  => text string and keyword string
  Output => encrypted string 
Examples    
  - keyword => abc  012 
  - text =>    abc  ace
    keyword => aBc  012
    text =>    aA's aB'u
Data Structure 
  - string to hold result
  - integer to track current char in the keyword
Algorithm
  - create emtpy result string
  - loop over all the characters in the text, for each character
    - if the character is not a letter
      - add the character to the result
    else
      - get the shift letter of the keyword SUBPROCESS
      - get the shift value SUBPROCESS
      - shift over the current letter with the shift value SUBPROCESS
      - add the shifted letter to the result
  - return the result        
 
  SUBPROCESS nextChar
    - initialize an index variable outside the function to 0
    - char = keyword[index]
    - increment index by 1
    - if index === keyword length - 1
      - index = 0
    - return the char  
  SUBPROCESS shiftValue(char)
    - convert char to lowercase
    - get the character code
    - return the character code - 97
  SUBPROCESS shiftLetter(char, shiftvalue)
    - code = char.code + shiftvalue 
    - if char is lowercase
      - if code is greater than the code for 'z'
        - get the difference of code and 'a' code
        - code = code for 'a' + the difference - 1
    else -
      - - if code is greater than the code for 'Z'
        - get the difference of code and 'Z' code
        - code = code for 'A' + the difference - 1  
    - return the char at the code's value    
*/

let index = 0;

function shiftValue(char) {
  return char.toLowerCase().charCodeAt() - 97;
}

function encrypt(text, keyword) {
  let result = '';
  for (char of text) {
    if (/[^a-z]/i.test(char)) {
      result += char;
    } else {
      let shiftChar = nextChar(keyword);
      let shiftAmount =  shiftValue(shiftChar);
      result += shiftLetter(char, shiftAmount);
    }  
  }
  return result;
}

function nextChar(keyword) {
  let char = keyword[index];
  index = index === keyword.length - 1 ? 0 : index + 1;
  return char;
}

function shiftLetter(char, shiftAmount) {
  let charcode = char.charCodeAt() + shiftAmount;
  if (/[a-z]/.test(char)) {
    if (charcode > 'z'.charCodeAt()) {
      let difference = charcode - 'z'.charCodeAt();
      charcode = 'a'.charCodeAt() + difference - 1;
    }
  } else {
    if (charcode > 'Z'.charCodeAt()) {
      let difference = charcode - 'Z'.charCodeAt();
      charcode = 'A'.charCodeAt() + difference - 1;
    }
  }
  return String.fromCharCode(charcode);
}
//  SUBPROCESS shiftLetter(char, shiftvalue)
//     - code = char.code + shiftvalue 
//     - if char is lowercase
//       - if code is greater than the code for 'z'
//         - get the difference of code and 'z' code
//         - code = code for 'a' + the difference - 1
//     else -
//       - - if code is greater than the code for 'Z'
//         - get the difference of code and 'Z' code
//         - code = code for 'A' + the difference - 1  
//     - return the char at the code's value

console.log(encrypt('abc', 'abc')); //  ace
console.log(encrypt("aA's", 'aBc')); // aB'u
console.log(encrypt("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!