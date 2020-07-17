const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes"));
    notes.forEach(note => console.log(note.title))
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('./notes.json'))
    } catch (err) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)
    console.log(noteToKeep);
    if (notes.length > noteToKeep.length) {
        saveNotes(noteToKeep);
        console.log(chalk.green.inverse("Note Deleted"))
    } else {
        console.log(chalk.inverse("Note Not found"));
    }
}

module.exports = {
    addNotes,
    listNotes,
    removeNotes
}