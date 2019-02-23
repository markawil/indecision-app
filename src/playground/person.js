
const isAdult = (age) =>  age >= 18;
const canDrink = (age) => age >= 21;

// named exports method
export { isAdult, canDrink };  

export default (age) => age >= 65;