const getPerson = function () {
    return {
        name: "Michael",
        age: 27,
        address: {
            city: "City",
            country: "Country"
        },
        toString: function () {
            /* Avoiding the Lexical This */
            /* Using the That-Pattern or alternative: using a Arrow Function instead of a Function */
            const that = this;
            return `${that.name} - ${that.age} - ${that.address.city} - ${that.address.country}`
        }
    }
}
const person = getPerson();
console.log(person.toString());

/* Without Object Destructuring */
const nameFromPerson = person.name;
const ageFromPerson = person.age;
const cityFromPerson = person.address.city;
const countryFromPerson = person.address.country;

console.log(`${nameFromPerson} - ${ageFromPerson} - ${cityFromPerson} - ${countryFromPerson}`);

/* With Object Destructuring */
/* The Name of the Variable have to be the same as in the Object */
const {name, age, address: {city, country}} = person;

console.log(`${name} - ${age} - ${city} - ${country}`);

/* Using the Spread Operator to add additional Information */
const personWithGender = {
    ...person,
    gender: "Male"
}

const {name: nameOfPersonWithGender, gender} = personWithGender;
console.log(`${nameOfPersonWithGender} - ${gender}`);
