const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const title = {
    describe: "Title of the note",
    demand: true,
    alias: 't'
};

const body = {
    describe: "Body for the note",
    demand: true,
    alias: 'b'
};

const argv =  yargs
.command('add', 'Add a new note', {
    title: title,
    body: body
})
.command('read', 'Read a note', {
    title: title
})
.command('remove', 'Remove a note', {
    title: title
})
.command('list', 'Listng all note')
.help().argv;
var command = argv._[0];

if(command === 'add') {
   var note = notes.addNote(argv.title, argv.body);
   if(note) {
        console.log("Note Created");
        notes.logNote(note);
    } else console.log("Note creation failed");
} else if(command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note's.`);
    allNotes.forEach(note => notes.logNote(note));
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if(command === 'remove') {
    var status = notes.removeNote(argv.title);
    if(status) console.log('Note Deleted');
    else console.log('some error occured');
} else {
    console.log('command not found');
}