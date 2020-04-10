/*
Problem
  input  => Number (odd integer)
  output => print a string

  - given an odd number representing the height and width of a grid
  - print a diamond that fits into the grid
  - 
Examples
  input  => 3
  output => ' *'  // 1 spaces, 1 stars
            '***' // 0 spaces, 3 stars
            ' *'  // 1 spaces, 1 stars
  input  => 5          
  output => '  *'   // 2 spaces, 1 star 
            ' ***'  // 1 spaces, 3 stars
            '*****' // 0 spaces, 5 stars
            ' ***'  // 1 spaces, 3 stars
            '  *'   // 2 spaces, 1 star 
Data Structure
  each line is a string
Algorithm
  - given a number representing the stars size
  - stars = 1
  - for line = 1 <= size
    - spaces = (size - stars) / 2
    - print (space * spaces) + (star * stars)
    - if (before middle line)
        stars += 2
        spaces -= 1
      else (reached the middle line)
        stars -= 1
        spaces += 1   
    
Questions  
  - one string or seperate strings?
*/

function diamond(size) {
  const STAR = '*'
  const SPACE = ' ';
  let half = Math.floor(size / 2)
  let starCount = 1;
  let increment = 2;

  for (line = 1; line <= size; line += 1) {
    spaceCount = (size - starCount) / 2
    console.log(SPACE.repeat(spaceCount) + STAR.repeat(starCount));
    starCount += increment;
    if (line === half) {
      increment = -2;
    }
  }
}

diamond(9);