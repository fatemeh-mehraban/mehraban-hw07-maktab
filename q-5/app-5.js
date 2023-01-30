let map = new Map();
map.set("name", "John");
let keys = map.keys();
// console.log(typeof(keys)); its object
keys = Array.from(keys)

keys.push("more");
console.log(keys);
