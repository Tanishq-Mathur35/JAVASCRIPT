// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    // console.log(element);
}



// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop: ${j} and ${i}`);
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }



// let myArray = ["apple", "banana", "cherry", "date"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }



// Break and Continue
for (let i = 1; i <= 10; i++) {
    if (i == 4) {
        console.log("Skipping 4");
        continue; // skip the rest of the loop when i is 4
    }
    if (i == 8) {
        console.log("Breaking at 8");
        break; // exit the loop when i is 8
    }
    console.log(i);
}
