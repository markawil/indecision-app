// arguments object - no longer bound with arrow functions.

const add = function(a, b) {
  // valuable object in any ES5 type function, basically reflection, not available in an arrow function
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Mark',
  cities: ['Houston', 'OKC'],
  //printPlacesLived: function() { // classic method
  printPlacesLived() {  // cleaned up usage    

    // returns a new mapped array with what you instruct it to do
    return this.cities.map((city) => {
      return this.name + 'has lived in ' + city;
    });

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

// challenge area 

const multiplier = {
  // params to use
  // numbers - array we want to multiply
  // multiplyby - single number
  // multiply - method to return a

  multiply(numbers, multiplier) {
    
    return numbers.map((number) => {
      return number * multiplier;
    });
  }
};

console.log(multiplier.multiply([1,2,3], 2)); // expectation: [1,2,3] * 2 = return [2, 4, 6]