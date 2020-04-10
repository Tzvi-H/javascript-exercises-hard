/*
Problem
  - Given a string and a key
    encrypt each character in the string by shifting the charcode to the right key amount of times
  - non alphabetical letters stay the same
  - letters should keep their case 
Example
  ('aA zZ' 2) => ('cC bB')
Data structure
  - array of split characters
Algorithm
  - given a string and a key
  - split the string into an array of characters
  - map the array, for each character
    - if not alphabetical
      - return the character as is
    - else (if alphabetical)
      - code = current char code + key  
      - if uppercase
        - if newCode is > than the charCode for 'Z'
           - newCode is 65 + 91 % newCode
      else (lowercase)  
        - if newCode is > than the charCode for 'z'
          - newCode is 97 + 123 % newCode
      - return String.charCodeAt(newcode)    
  - return joined mapped array    
*/

function caesarEncrypt(string, key) {
  return string.split('')
               .map(char => encrptChar(char, key))
               .join('');
}

function encrptChar(char, key) {
  if (/[^a-z]/i.test(char)) {
    return char;
  } else {
    return encryptLetter(char, key);
  }
}

function encryptLetter(letter, key) {
  let code = letter.charCodeAt() + key;
  if (letter === letter.toUpperCase()) {
    code = cleanUpperCasecode(code);
  } else {
    code = cleanLowerCasecode(code);
  }
  return String.fromCharCode(code);
}

function cleanUpperCasecode(code) {
  if (code > 90) {
    let overflow = code - 90;
    overflow = overflow % 26;
    code = 64 + overflow;
  }
  return code;
}

function cleanLowerCasecode(code) {
  if (code > 122) {
    let overflow = code - 122;
    overflow = overflow % 26;
    code = 96 + overflow;
  }
  return code;
}

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


