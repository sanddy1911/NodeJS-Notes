console.log('starting-notes');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
   } catch(e) {
        return [];
   }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) => {
   var notes = fetchNotes();
   //old way
   //var note = {title = title, body = body};
   //ES6 Way
   var note = {title, body};

   var duplicateNotes = notes.filter((note) => note.title === title);
   if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
   }
}

var getAll = () => {
    console.log('getting all notes');
}

var getNote = (title) => {
    console.log(`'reading note' ${title}`);
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var finalNotes = notes.filter(note => note.title !== title);
    saveNotes(finalNotes);
    return notes.length !== finalNotes.length;
}

module.exports = {
    // old way
   // addNote: addNote 
   // ES6+ way
   addNote,
   getAll,
   getNote,
   removeNote
}