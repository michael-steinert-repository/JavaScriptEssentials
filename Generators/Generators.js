/* Generators are Functions that can be paused => asynchronous Computation */
/* It contains a Property "done" that represents the State of this Generator */
const getValues = function* () {
    yield 1;
    yield "Michael";
    yield true;
    yield {name: "Michael", age: 27};
    return "Generator done";
}

const valuesGenerator = getValues();

console.log(valuesGenerator.next());

console.log(valuesGenerator.next());

console.log(valuesGenerator.next());

console.log(JSON.stringify(valuesGenerator.next()));

console.log(valuesGenerator.next());

const getNumbers = function* (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}

const getNumbersGenerator = getNumbers([1, 2, 3]);

const interval = setInterval(() => {
    const nextNumber = getNumbersGenerator.next();
    if (nextNumber.done) {
        console.log("NumberGenerator is done");
        clearInterval(interval);
    } else {
        console.log(nextNumber.value);
    }
}, 1000);
