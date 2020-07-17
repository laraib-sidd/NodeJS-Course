let RandomNumber = Math.floor(Math.random() * 4)
const note = ['rew','fsd','helow','fsd']

function getNotes() {
    return note[RandomNumber]
}

module.exports= getNotes;