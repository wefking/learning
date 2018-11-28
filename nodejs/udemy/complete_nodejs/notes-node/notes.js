console.log('starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
      } catch (e) {
        return [];    
      };
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
      title,
      body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  };


  
};

var getAll = () => {
    console.log("Getting all notes")
    return fetchNotes();
};

var getNote = (title) => {
    console.log("Get Note:", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    console.log("Remove Note:", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    // addNote: addNote
    // here a property has the same name as the value which is a variable. Then a shortchut is
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};


// module.exports.age = 25;
// module.exports.addNote = function () {

// }
// Replaced by arrow function:
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };


//==============================
// module.exports.add = (a,b) => {
//     return a + b;
// }
// // console.log(module)