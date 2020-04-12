/*
Problem
  - Given a size of a grid
  - print an 8 pointed star
Algorithm
  - shape is split into 3 parts. first half, middle, second half
  - middle is always '*' repeated n times
  - the halves are always the amount of the 'middle' lines
  - the halves always 3 stars printed with padding in betweeen and margin around
  - for both halves, you can loop from 0 until less than the middle
  - half 1 => each margin is the amount of the line
           => each padding is (size - 3) / 2 - margin 
  - half 2 => each padding is the amount of the line
           => each padding is (size - 3) / 2 - margin 
*/

function star(size) {
  const totalSpaces = size - 3;
  let middle = Math.floor(size / 2);

  for (line = 0; line < middle; line += 1) {
    let margin = line;
    let padding = totalSpaces / 2 - margin;
    printRow(padding, margin);
  }

  console.log('*'.repeat(size));
  
  for (line = 0; line < middle; line += 1) {
    let padding = line;
    let margin = totalSpaces / 2 - padding;
    printRow(padding, margin);
  }
}

function printRow(padding, margin) {
  const SPACE = ' ';
  const STAR = '*';
  const STARS = [STAR, STAR, STAR];
  console.log(SPACE.repeat(margin) + 
              STARS.join(SPACE.repeat(padding)) + 
              SPACE.repeat(margin));
}
star(7);