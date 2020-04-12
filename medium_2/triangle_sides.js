function allEqual(side1, side2, side3) {
  return side1 === side2 && side2 === side3;
}

function twoEqual(side1, side2, side3) {
  return side1 === side2 || 
         side2 === side3 ||
         side2 === side3;
}

function validTriangle(side1, side2, side3) {
  let sum = side1 + side2 + side3;
  let min = Math.min(side1, side2, side3);
  let max = Math.max(side1, side2, side3);
  let middle = sum - min - max;
  
  return min > 0 && middle + min > max;
}

function triangle(side1, side2, side3) {
  if (!validTriangle(side1, side2, side3)) {
    return 'invalid';
  } 

  if (allEqual(side1, side2, side3)) {
    return 'equilateral';
  } else if (twoEqual(side1, side2, side3)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"