const path = require('path');
const express = require('express');

const app = express()

const filePath = path.join(__dirname, '../public')

app.use(express.static(filePath))

app.get('/weather', (req, res) => {
    res.send('<h1>Weather Page</h1>')
})

app.listen(3000, () => {
    console.log('The server is running');
})