const express = require('express')
const FocusNote = require('../models/FocusNoteModel')
const {
    createNewFocusNote,
    getFocusNote,
    getFocusNotes,
    DeleteFocusNote,
    UpdateFocusNote
} = require('../controllers/focusNoteController')


const router = express.Router()

//Get all focustodos
router.get('/', getFocusNotes)

//Get single focustodo
router.get('/:id', getFocusNote)

//Post single focustodo
router.post('/', createNewFocusNote)

//Delete single focustodo
router.delete('/:id', DeleteFocusNote)

//Update single focustodo
router.patch('/:id', UpdateFocusNote)

module.exports = router