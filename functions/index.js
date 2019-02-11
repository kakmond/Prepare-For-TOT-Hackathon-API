var express = require('express')
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var userRouter = require('./routes/user')

const functions = require('firebase-functions')

var app = express()
// Create "main" function to host all other top-level functions
var main = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

main.use('/api/', app)

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(main)

<<<<<<< HEAD
app.use('/aqi', indexRouter)
=======
app.use('/news', indexRouter)
app.use('/user', userRouter)
>>>>>>> fe31688f4a25060f024ee6c3fb0352c6f93b8665
