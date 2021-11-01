/* Named Imports allows import multiple Values of Modules */
import * as MathImport from "/.Math";
import nameOfLibrary, {add, subtract, PI} from "/.Math";

/* Default Imports allows import one Value from a Module */
import Animal from "./Animal";

console.log(`Using Library: ${nameOfLibrary}`);

/* Import: import * as MathImport from "/.Math"; */
console.log(MathImport.add(1,2));

console.log(MathImport.subtract(1,2));

console.log(MathImport.PI);

/* Import: import {add, subtract, PI} from "/.Math"; */
console.log(add(1,2));

console.log(subtract(1,2));

console.log(PI);

const animal = new Animal();
console.log(animal);
/* Calling a Function */
console.log(animal.sleep());
/* Calling a Property - Getter */
console.log(animal.description);
/* Calling a Setter */
console.log(animal.name("Bruno"));