// Module Imports
const chalk = require("chalk");
const yargs = require("yargs");

// Internal Imports
const notes = require('./notes')

// Setting version
yargs.version('1.0.0')


// Add Command
yargs.command({
    command: "add",
    describe: "Adds a new Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNotes(argv['title'], argv['body']);

    }
})

// Remove Command
yargs.command({
    command: "remove",
    describe: "Removes a Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNotes(argv['title'])
    }
})

// List Command
yargs.command({
    command: "list",
    describe: "lists your note",
    handler() {
        console.log('Lists our all Notes');
    }
})

// Read Command
yargs.command({
    command: "read",
    describe: "Reads a note",
    handler() {
        console.log('Read notes');
    }
})

yargs.parse()