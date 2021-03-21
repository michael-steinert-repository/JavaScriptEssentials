/* The Default Parameter is used if no other Parameter is specified */
const add = function (n1, n2 = 0) {
    return n1 + n2;
}

console.log(add(1, 2));

/* With Default Parameter */
console.log(add(1));

const sayHello = function (name, address = {city: "City", country: "Country"}) {
    return `Hello ${name} from ${address.city} in ${address.country}`;
}

console.log(sayHello("Michael", {city: "BestCity", country: "BestCountry"}));

/* With Default Parameter as an Object */
console.log(sayHello("Michael"));