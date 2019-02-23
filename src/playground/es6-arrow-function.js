// classic es5 function form
function square(x) {
  return x * x;
}

console.log(square(2));

// arrow functions are anonymous, need to be set to a const/variable
const arrowFuncionExample = (x) => {
  return x * x;
};

// better usage if just one line is needed in the function
const squareArrow = (x) => x * x;

console.log(squareArrow(8));

// Challenge: Use arrow functions
// getFirstName('Mark W'), prints to console
// Create regular arrow function, then create another use expression syntax (short-hand syntax)

const firstName = (fullName) => {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
};

firstName('Mark Wilkinson');

const firstNameShort = (fullName) => console.log(fullName.split(' ')[0]);

firstNameShort('Sam Wilkinson');