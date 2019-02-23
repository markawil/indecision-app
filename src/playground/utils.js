console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// named export and 1 default
export { square, add, subtract };

// exports, 2 types:
// 1. default export
// 2. named export