/* Named Imports allows import multiple Values of Modules */
import * as MathImport from '/.Math';
import {add, subtract, PI} from '/.Math';

/* Default Imports allows import one Value from a Module */
import Animal from './Animal';

console.log(MathImport.add(1,2));

console.log(MathImport.subtract(1,2));

console.log(MathImport.PI);

console.log(add(1,2));

console.log(subtract(1,2));

console.log(PI);

let animal = new Animal();
