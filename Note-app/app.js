// Module Imports
const val = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

// Setting version
yargs.version('1.0.0')

// Add Command
yargs.command({
    command: "add",
    describe: "Adds a new Note",
    handler: function () {
        console.log('New Note Added');
    }
})

// Remove Command
yargs.command({
    command: "remove",
    describe: "Removes a Note",
    handler: function () {
        console.log('Note Removed');
    }
})

// List Command
yargs.command({
    command: "list",
    describe: "lists your note",
    builder: {
        title: {
            describe: "Note Title"
        }
    },
    handler: function () {
        console.log('Lists our all Notes');
    }
})

// Read Command
yargs.command({
    command: "read",
    describe: "Reads a note",
    handler: function () {
        console.log('Read notes');
    }
})

console.log(yargs.argv);
