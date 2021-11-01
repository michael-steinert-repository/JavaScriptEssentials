/* Maps allows to store Key-Value Pairs - each Key is unique */
const map = new Map();
map.set("name", "Michael");
map.set("age", 27);

console.log(map);
console.log(map.size);
console.log(map.has("name"));

/* Getting Value from a Map */
console.log(map.get("name"));
console.log(map.get("age"));

/* Deleting a Key-Value Pair */
map.delete("age");
console.log(map);

/* Mapping through a Map using the Keys */
for (const key of map.keys()) {
    console.log(map.get(key));
}

/* Mapping through a Map using the Values */
for (const value of map.values()) {
    console.log(value);
}

/* Mapping through a Map using the Entries */
for (const entry of map) {
    /* Each Entry is an Array */
    console.log(entry);
}

/* Converting a Map into an Object */
const objectFromMap = Object.fromEntries(map.entries());
console.log(objectFromMap);

/* Deleting entire Map */
map.clear();
console.log(map);