console.log("With Type Coercion");

console.log(`0 (${typeof(0)}) equals false (${typeof(false)}) => ${0 == false}`);

console.log(`"0" (${typeof("0")}) equals false (${typeof(false)}) => ${"0" == false}`);

console.log(`"0" (${typeof(0)}) equals 0 (${typeof(0)}) => ${"0" == 0}`);

console.log("Without Type Coercion");

console.log(`0 (${typeof(0)}) equals false (${typeof(false)}) => ${0 === false}`);

console.log(`"0" (${typeof("0")}) equals false (${typeof(false)}) => ${"0" === false}`);

console.log(`"0" (${typeof(0)}) equals 0 (${typeof(0)}) => ${"0" === 0}`);
