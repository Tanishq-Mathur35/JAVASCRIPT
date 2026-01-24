const user = {
    username: "tanishq",
    price: 5000,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website!`);
        console.log(this);  // 'this' refers to the 'user' object
    }
}


// user.welcomeMessage();
// user.username = "john doe";
// user.welcomeMessage();

// console.log(this) // in global scope, this refers to the global object (window in browsers, global in Node.js)



// function hello() {
//     let username = "tanishq";
//     console.log(this.username);    // this console.log will print undefined in this case because 'this' in regular functions in global scope refers to the global object, which doesn't have a 'username' property
// }
// hello();



// const hello = function () {
//     let username = "tanishq";
//     console.log(this.username);  // this console.log will print undefined in this case because 'this' in regular functions in global scope refers to the global object, which doesn't have a 'username' property
// }
// hello();




const hello = () => {
    let username = "tanishq";
    console.log(this);
}
// hello();


//Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 7));


// Implicit return
const addThree = (num1, num2, num3) => num1 + num2 + num3;   // or (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(5, 7, 9));



const myArray = [100, 200, 300, 400, 500];
// myArray.forEach()
