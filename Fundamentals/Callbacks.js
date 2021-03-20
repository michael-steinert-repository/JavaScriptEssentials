/* A Callback is a Function which si passed inside another Function (and that Function gets executed at some Point) */
function callbackExample(name, callback) {
    console.log(callback(name));
}

callbackExample("Michael", function (name) {
    return `Hello ${name}`;
})