const getPerson = function () {
    return {
        name: "Michael",
        age: 27,
        address: {
            city: "City",
            country: "Country"
        }
    }
}
const person = getPerson();

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