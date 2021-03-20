/* Functions are a Set of Statements that allow to complete a Task */
function addNumbers(n1, n2) {
    return n1 + n2;
}

console.log(addNumbers(1, 2));

let subNumbers = (n1, n2) => {
    if (n1 > n2) {
        return n1 - n2;
    }
    return n2 - n1;
}

console.log(subNumbers(2,1));

let person = {name:"Michael", age: 27};

console.log(Object.keys(person).toString().toLocaleUpperCase());

console.log(Object.values(person));

console.log(Object.keys(person));