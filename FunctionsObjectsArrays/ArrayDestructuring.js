/* Array Destructuring allows to pull Values from an Array */
/* Without Array Destructuring */
const numbers = [1, 2, 3, 4, 5];
const numberOne = numbers[0];
const numberTwo = numbers[1];
const numberThree = numbers[2];

console.log(`${numberOne} - ${numberTwo} - ${numberThree}`);

/* With Array Destructuring */
/* The Name of the Variable have not to be the same as in the Object */
/* The Order follows the Index */
const [number1, , number3, ...restOfNumbers] = numbers;

console.log(`${number1} - ${number3}`)

/* Using the Spread Operator to get the remaining Values of an Array */
console.log(...restOfNumbers)