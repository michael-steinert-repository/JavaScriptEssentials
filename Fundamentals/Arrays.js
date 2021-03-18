/* Arrays allows to store multiple Values */
let names = ["Michael", "Marie", {}, 1, undefined];

console.log(names);

console.log(names.length);

console.log(names[0]);

for(let n of names){
    console.log(n);
}

names.forEach(function (n, index) {
    console.log(`${index} - ${n}`);
})