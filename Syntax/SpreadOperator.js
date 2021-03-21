/* The Spread Operator allows to expand a Expression where Arguments, Element or Variables are excepted */

/* Spread Operator with Arrays */
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const concatenatedArray = [...arrayOne, ...arrayTwo];

console.log(`ArrayOne: ${arrayOne}`);

console.log(`ArrayTwo: ${arrayTwo}`);

console.log(`ConcatenatedArray: ${concatenatedArray}`);

concatenatedArray.forEach(function (n) {
    console.log(n);
});

/* Spread Operator with Strings */
const name = "Michael";
const nameToArray = [...name];

nameToArray.forEach(function (letter) {
    console.log(letter);
});

/* Spread Operator with Functions */
const addNumbers = function (n1, n2) {
    return n1 + n2;
}
const numbers = [1, 2];

/* Without Spread Operator */
console.log(addNumbers(numbers[0], numbers[1]));

/* With Spread Operator */
console.log(addNumbers(...numbers));

/* Spread Operator with Objects */
const person = {
    name: "Michael",
    age: 27
}
const personAddress = {
    city: "City",
    country: "Country"
}

/* Without Spread Operator */
const person1 = {
    name: person.name,
    age: person.age,
    city: personAddress.city,
    country: personAddress.country
};

console.log(JSON.stringify(person1));

/* With Spread Operator */
const person2 = {...person, ...personAddress};

console.log(JSON.stringify(person2));