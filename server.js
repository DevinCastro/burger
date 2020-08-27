// bring in these packages
const express = require('express')
const { join } = require('path')

// create and express server
const app = express()

// bring in our middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// bring in handlebars and change the extension to .hbs
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(require('./controllers'))

// let the app listen on a port
app.listen(process.env.PORT || 3000)