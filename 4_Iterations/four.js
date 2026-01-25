const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    py: 'Python',
    swift: 'Swift by apple'
}
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}



const programmingLanguages = ['JavaScript', 'C++', 'Python', 'Swift by apple'];
for (const language in programmingLanguages) {
    console.log(`${language} : ${programmingLanguages[language]}`);
}
