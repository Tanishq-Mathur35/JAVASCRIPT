// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toISOString());
console.log(typeof myDate);
console.log("-----------------------\n");


let myCreatedDate = new Date(2026, 0, 15, 10, 33, 30, 0); // Year, Month (0-indexed), Day, Hours, Minutes, Seconds, Milliseconds
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));
console.log("-----------------------\n");


const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log("-----------------------\n");


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: 'long',
})
