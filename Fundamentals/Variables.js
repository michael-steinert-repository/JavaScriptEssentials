/* Variables are a Placeholder to store Values */
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

let empty = undefined;

console.log(`${JSON.stringify(person)} is Type of ${typeof(person)}`);

console.log(`${person.name} is Type of ${typeof(person.name)}`);

console.log(`${person.age} is Type of ${typeof(person.age)}`);

console.log(`${person.hasAnEmail} is Type of ${typeof(person.hasAnEmail)}`);

console.log(`${JSON.stringify(person.address)} is Type of ${typeof(person.address)}`);

console.log(`${empty} is Type of ${typeof(empty)}`);
