/* The Map Function transforms the Data, so the Function si called on each Element */
let map = [1,2,3].map(function (n){
    return(`The Number on corresponding Index: ${n}`);
});

console.log(map);

/* The Filter Function needs a boolean Expression */
let filter = [1,2,3].filter(function (n){
    return n % 2 == 0;
});

console.log(filter);

/* The Reduce Function reduces all Values into one Value */
let reduce = [1,2,3].reduce(function (accumulator, current){
    return accumulator + current;
});

console.log(reduce);