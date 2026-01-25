// for of LOOP

const colors = ['red', 'green', 'blue'];

for (const color of colors) {    // for of loop is used when we want to iterate over iterable objects like arrays, strings, maps, sets, etc.
    console.log(color);
}


const greeting = "Hello-world";
for (const char of greeting) {
    console.log(char);
}




// Maps
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(`Key is: ${key} and value is: ${value}`);
}


const myObject = {
    name: "Tanishq",
    age: 22,
    city: "New Delhi"
}
