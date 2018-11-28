console.log("starting app.");

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var user = os.userInfo();

//==============================

// 
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: "Body of note",
    demand: true,
    alias: 'b'
};

// const argv = yargs.argv;
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

// var command = process.argv[2];
var command= argv._[0];
console.log('Command: ', command);
// console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
    // console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    console.log(note);
    // console.log(note.length);
    if (note) {
        console.log('Note has been created', note.title, note.body);
        notes.logNote(note);
    } else {
        console.log('Duplicated Note, it has not been added');
    };
} else if (command === 'list') {
    // console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    // console.log('Reading note');
    var note = notes.getNote(argv.title);
    // message = note ? 'Note found' : 'Note not found';
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');

    };
    // console.log(message);
} else if (command === 'remove') {
    // console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}




//==============================
// lodash
// https://lodash.com/docs/4.17.10#isString
// console.log(_.isString(true));
// console.log(_.isString('Hello'));

//https://lodash.com/docs/4.17.10#uniq

// var filteredArray = _.uniq(["William", 1, 'William', 1, 2, 3, 4, 5])
// console.log(filteredArray);


//==============================
// Import own modules

// var res = notes.addNote();
// console.log(res);

// var res = notes.add(100,-53);
// var res = notes.add('Hola', 'Willy');
// console.log('Result:', res);

//==============================
// Import modules

// console.log(user);
// fs.appendFile('greetings.txt', '\nHello ' + user.username + '!', function (err) {

// fs.appendFile('greetings.txt', `\nHello ${user.username}! you are ${notes.age}`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });
