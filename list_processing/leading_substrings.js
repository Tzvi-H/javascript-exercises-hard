// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, 
// ordered from shortest to longest.

// Examples:

// substringsAtStart('abc');      // ["a", "ab", "abc"]
// substringsAtStart('a');        // ["a"]
// substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substringsAtStart(string) {
  return string.split('')
               .map((_, index) => string.slice(0, index + 1));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]