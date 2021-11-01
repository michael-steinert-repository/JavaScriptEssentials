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

/* Using the Spread Operator to pass some Values */
const add = (a, b) => {
    return a + b;
}
const addedNumbers = add(...numbers);
console.log(addedNumbers);

/* Mapping over an Array */
const numberTimesTwo = numbers.map((number) => {
    return number * 2;
});

console.log(numberTimesTwo)

/* Reducing an Array */
const reducedArray = numberTimesTwo.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
});

console.log(reducedArray);