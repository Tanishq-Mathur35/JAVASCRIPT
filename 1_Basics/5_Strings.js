const name = "Tanishq";
const repoCount = 8;

// console.log(name + " " + repoCount + " Repositories");

console.log(typeof name)
console.log(`Hello I am ${name} and I have ${repoCount} repositories.`);

console.log("\n");

const gameName = new String("Free-Fire");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-9, 2);
console.log(anotherString);

const newStringOne = "      tanishq_3500    ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(gameName.split('-'));
console.log("\n");


const url = "https://tanishq.com/tanishq%20mathur"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

