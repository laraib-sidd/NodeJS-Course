// Module Imports
const val = require("validator");
const fs = require('fs')
const chalk = require("chalk");
const yargs = require("yargs");

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
    handler: function (argv) {
        let data = {
            title: argv['title'],
            body: argv['body']
        }
        fs.writeFileSync('notes.json',JSON.stringify(data))
        console.log('fas');
        console.log(chalk.green.bgBlack('Note Added'))
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

yargs.parse()