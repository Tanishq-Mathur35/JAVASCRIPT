function myName() {
    console.log("My name is Tanishq Mathur");
}
myName();


function add(num1, num2) {   // here num1 and num2 are parameters
    return num1 + num2;
}

const result = add(5, 7);    // here 5 and 7 are arguments
console.log(result); // Output: 12


function loginUser(username) {
    if (!username) {
        return "Please enter a valid username";
    }
    return `Welcome back, ${username}!`;
}

console.log(loginUser("tanishq"));


function calcculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calcculateCartPrice(100, 200, 300, 400));



const user = {
    username: "tanishq mathur",
    price: 5000
}

function handleObject(anyobject) {
    console.log(`Username is: ${anyobject.username} and price is: ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username: "john doe",
    price: 6000
});


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30, 40]));
