const express = require('express');
const NotesModel = require('./models/notes.model');
const connectDb = require('./config/db');
const createNotesController = require('./controllers/notes.controller');
const notesRoute = require("./routes/notes.route")
const app = express()
connectDb()
app.get('/',(req,res)=>
{
  res.send("okay got it...");
})

app.use(express.json());


app.use('/notes',notesRoute)

module.exports = app;