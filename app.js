console.log("starting-app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv =  yargs.argv;
var command = argv._[0];

if(command === 'add') {
   var note = notes.addNote(argv.title, argv.body);
   if(note) console.log("Note Created");
   else console.log("Note creation failed");
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    var status = notes.removeNote(argv.title);
    if(status) console.log('Note Deleted');
    else console.log('some error occured');
} else {
    console.log('command not found');
}