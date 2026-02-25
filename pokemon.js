const foods = [];
console.log('Exercise 1 result:', foods);



foods.push('pizza');
foods.push('cheeseburger');
console.log('Exercise 2 result:', foods);


foods.unshift('taco');
console.log('Exercise 3 result:', foods);


let favFood = foods[1];
console.log('Exercise 4 result:', favFood);



foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);



let pizzaIndex = foods.indexOf('pizza');
foods.splice(pizzaIndex, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);



let yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);



let soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);



let allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);



let hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);



const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    odds.push(nums[i]);
  }
}

console.log('Exercise 11 result:', odds);



let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
    fizzbuzz.push(nums[i]);
  } else if (nums[i] % 3 === 0) {
    fizz.push(nums[i]);
  } else if (nums[i] % 5 === 0) {
    buzz.push(nums[i]);
  }
}

console.log("Exercise 12 Results:");
console.log("fizz:", fizz);
console.log("buzz:", buzz);
console.log("fizzbuzz:", fizzbuzz);



const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
];

let numList = numArrays[numArrays.length - 1];
console.log("Exercise 13 result:", numList);



let num = numArrays[2][1];
console.log("Exercise 14 result:", num);



let total = 0;

for (let i = 0; i < numArrays.length; i++) {
  for (let j = 0; j < numArrays[i].length; j++) {
    total += numArrays[i][j];
  }
}

console.log("Exercise 15 result:", total);