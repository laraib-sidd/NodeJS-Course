const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    console.log(duplicateNote);
    if (!duplicateNote) {
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
    if (notes.length > noteToKeep.length) {
        saveNotes(noteToKeep);
        console.log(chalk.green.inverse("Note Deleted"))
    } else {
        console.log(chalk.inverse("Note Not found"));
    }
}

const readNote = (title) =>{
    debugger
    const notes = loadNotes()
    const requiredNote = notes.find((note)=> note.title === title)
    if (requiredNote){
        console.log(chalk.blueBright.bgWhite(requiredNote.title));
        console.log(requiredNote.body);
    }
    else{
        console.log(chalk.red.inverse('Note not Found'));
    }
}

module.exports = {
    addNotes,
    listNotes,
    removeNotes,
    readNote
}