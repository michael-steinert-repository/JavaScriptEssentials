/* Var Variable is globally valid in the Code */
/* Let Variable is only valid within its Block */
/* Const Variable is globally valid in the Code (and is readonly except for its Content) */
var x = 1;
const y = 1;
const personObject = {};
const personArray = [];

if (true) {
    let z = 1;

    console.log(`Variable is globally valid ${x}`);

    console.log(`Variable is globally valid ${y}`);

    personObject['name'] = "Michael";

    console.log(`Content of PersonObject: ${personObject.name}`);

    personArray.push("My Name is Michael");

    console.log(`Content of PersonArray: ${personArray[0]}`);

    console.log(`Variable is in Block valid ${z}`);
}

console.log(`Variable is globally valid ${x}`);

console.log(`Variable is in Block valid ${y}`);

try {
    console.log(`Variable is globally valid ${z}`);
} catch (error) {
    //console.log(error);
}
