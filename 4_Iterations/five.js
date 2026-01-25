// forEach Loop

const coding = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'];

coding.forEach(function (item) {
    console.log(item);
})


coding.forEach((item) => {
    console.log(item);
})


function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    { id: 1, lang: 'HTML' },
    { id: 2, lang: 'CSS' },
    { id: 3, lang: 'JavaScript' },
    { id: 4, lang: 'React' },
    { id: 5, lang: 'Node.js' },
    { id: 6, lang: 'Express' },
    { id: 7, lang: 'MongoDB' },
]

myCoding.forEach((item) => {
    console.log(item.lang);
})
