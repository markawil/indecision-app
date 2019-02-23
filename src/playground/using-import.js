import { subtract, square, add } from './utils.js';
import senior, { isAdult, canDrink } from './person.js';

console.log('app.js is running now!');
console.log(square(4));
console.log(add(100, 200));

console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(19));

console.log(canDrink(20));
console.log(canDrink(21));
console.log(canDrink(22));

console.log(subtract(2,1));

console.log(senior(74));