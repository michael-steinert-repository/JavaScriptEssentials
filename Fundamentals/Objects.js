/* An Object is a grouped Collection of Variables */
/* An Object contains Properties: Values */
let person = {
    name: "Michael",
    age: 27,
    hasAnEmail: true,
    address: {
        street: "Street123",
        postCode: "12345",
        country: "Germany"
    }
};

console.log(JSON.stringify(person.name));

/* String Representation of an Object */
console.log(JSON.stringify(person));

/* Get all Values of an Object */
console.log(Object.values(person));

console.log(JSON.stringify(person.address));

console.log(Object.values(person.address));
