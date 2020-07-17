const fs = require('fs');
const chalk = require('chalk');

function addNotes(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    if (!duplicateNotes.length) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green('Note Added'));
    } else {
        console.log(chalk.black.bgRed('Note Title Taken'));
    }

}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

function getNotes() {
    return true
}

function loadNotes() {
    try {
        return JSON.parse(fs.readFileSync('./notes.json'))
    } catch (err) {
        return []
    }
}

module.exports = {
    addNotes,
    getNotes,
    loadNotes
    removeNotes
}