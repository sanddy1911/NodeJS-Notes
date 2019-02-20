// var obj = {
//     name: 'Sundeep',
// };

// console.log(typeof(obj));

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));


// var personString = '{ "name": "Sundeep", "age": 23}';

// var person = JSON.parse(personString);

// console.log(typeof(person));



const fs = require('fs');

var originalNote = {
    title: "some title",
    body: "some body"
}

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var notes = JSON.parse(noteString);

console.log(typeof(notes));
console.log(notes.title);