/*
Problem
  - You have 13 blocks.
  - Each block contains 2 sides, each with one letter
  - All 26 letters are different
  - given a string, return true or false indicating if you can
    build the letters from the block.
  - you can only use a block once,
  - you can only use 1 letter per block
  - the letters are case insensitive
Examples
  - BATCH => true
  - BUTCH => false
  - jest  => true
Algorithm
  - create am array of 13 block letters
  - given a string
  - loop over the string UPPERCASED, for each char
    - find the index of the first block that contains the char
      - if the index is -1 => return false
      - otherwise
        - delete that block (with splice)
  - return true (if finished looping over all the strings)
*/

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let char of word.toUpperCase()) {
    let index = blocks.findIndex(block => block.includes(char));
    if (index < 0) return false;
    
    blocks.splice(index, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
