/*
Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

Example:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
*/

function buyFruit(groceryList) {
  return groceryList.reduce((list, fruitTypeAndCount) => {
    list = list.concat(repeat(fruitTypeAndCount));
    return list;
  }, []);
}

function repeat(fruit) {
  var result = [];
  var i;

  for (i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]