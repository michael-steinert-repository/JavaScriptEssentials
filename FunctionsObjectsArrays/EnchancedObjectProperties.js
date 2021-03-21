/* Enhanced Object Properties gives a better Syntax to work with Objects */
/* Without Enhanced Object Properties */
const person1 = (name) => {
    return {
        name: name,
        logName: function () {
            console.log(`My Name is ${name}`);
        }
    }
}
const p1 = person1("Michael");

p1.logName();

/* With Enhanced Object Properties */
const person2 = (name) => {
    return {
        name,
        logName() {
            console.log(`My Name is ${name}`);
        }
    }
}

const p2 = person1("Michael");

p2.logName();