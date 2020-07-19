const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Intialising Express app
const app = express()

// Setting up file paths
const filePath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../Templates/views')
const partialsPath = path.join(__dirname,'../Templates/partials')

// Setting up handlebars
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setting up static globalPath
app.use(express.static(filePath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Main Page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me'
    })
})

app.get('/weather', (req, res) => {
    res.send('<h1>Weather Page</h1>')
})

app.listen(3001, () => {
    console.log('The server is running');
})