var express = require('express')
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var indexRouter2 = require('./routes/index2')
var indexRouter3 = require('./routes/index3')
var userRouter = require('./routes/user')
var tempRouter = require('./routes/user')

const functions = require('firebase-functions')

var app = express()
// Create "main" function to host all other top-level functions
var main = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

main.use('/api/', app)

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(main)

app.use('/Bangsaothong', indexRouter)
app.use('/user', userRouter)
app.use('/Bangpeeyai',indexRouter2)
app.use('/Bangbor',indexRouter3)
// app.use('/temp',tempRouter)


