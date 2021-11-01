/* Default Exports allows exporting one Value from a Module */
class Animal {
    constructor() {
        console.log("I am an Animal");
    }
    /* Function */
    sleep() {
        console.log("Animal is sleeping");
    }
    /* Property - Setter */
    get description() {
        console.log("I am an Animal");
    }
    /* Setter */
    set name(name) {
        this.name = name;
    }
}

export default Animal;