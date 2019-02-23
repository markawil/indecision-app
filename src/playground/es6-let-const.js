var nameVar = 'Andrew';
var nameVar = 'Mark';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Bob';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping 

const fullName = 'Mark Wilkinson';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

// var firstName is scoped to this whole page
// const/let makes it only in the block
console.log(firstName);