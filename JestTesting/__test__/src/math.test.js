/* One File correspond to one Test Suite - One Test Suite can contains many Tests */
const {add, numberOfOccurrences} = require("./../../src/math");

test("add two Numbers", () => {
    /* Given */
    const a = 40;
    const b = 2;
    const expectedResult = 42;
    /* When */
    const result = add(a, b);
    /* Then */
    expect(result).toBe(expectedResult);
});

test("can find Number of Occurrences", () => {
    /* Given */
    const numbers = [1, 2, 2, 2, 5];
    const expectedNumber = 3;
    /* When */
    const result = numberOfOccurrences(numbers, 2);
    /* Then */
    expect(result).toBe(expectedNumber);
});

test("can find Number of Occurrences if 0", () => {
    /* Given */
    const numbers = [1, 2, 2, 2, 5];
    /* When */
    const result = numberOfOccurrences(numbers, 42);
    /* Then */
    expect(result).toBe(0);
});

test("will throw if input is not a Number", () => {
    /* Given */
    const numbers = [];
    /* When - Then */
    expect(() => numberOfOccurrences(numbers, "a")).toThrow("a is not a Number");
});
