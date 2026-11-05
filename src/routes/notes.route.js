const express = require('express');
const {createNotesController, getAllNotesController, getSingleNoteController, updateNotesController, deleteNoteController }= require('../controllers/notes.controller');
const NotesModel = require('../models/notes.model');
const { route } = require('../app');

const  router = express.Router()
//create
router.post("/create",createNotesController );
//read
router.get("/allNotes",getAllNotesController)
//read one
router.get("/:id",getSingleNoteController);
//update via put
router.put("/:id",updateNotesController)
//delete
router.delete("/:id",deleteNoteController)


module.exports = router;