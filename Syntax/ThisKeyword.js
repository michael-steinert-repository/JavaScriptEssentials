/* The This Keyword refers to his Object */
const person = {
    name: "Michael",
    vehicle: ['Car', 'Bicycle'],
    logPerson: function() {
        console.log(`The Name: ${this.name}`);
        /* The Arrow Function bind the Context to the Object of the This Keyword */
        this.vehicle.forEach((vehicle) => {
            console.log(`The Vehicle: ${vehicle}`);
        })
    }
}

person.logPerson();