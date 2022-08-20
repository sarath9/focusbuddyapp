const FocusNote = require('../models/FocusNoteModel')
const mongoose = require('mongoose')

//get all notes
const getFocusNotes = async (req, res) => {
    const FocusNotes = await FocusNote.find({}).sort({createdAt: -1})
    res.status(200).json(FocusNotes)
}


// get single note
const getFocusNote = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Results Found"})
    }
    const SingleFocusNote = await FocusNote.findById(id)
    if(!SingleFocusNote){
        return res.status(404).json({error: "No Results Found"})
    }
    res.status(200).json(SingleFocusNote)
}


// create new note
const createNewFocusNote = async (req, res ) => {
    const {title , note } = req.body
    try{
        const focusNote = await FocusNote.create({title, note})
        res.status(200).json(focusNote)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a note
const DeleteFocusNote = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Results Found"})
    }
    const focusNote = await FocusNote.findOneAndDelete({_id:id})
    if(!focusNote){
        return res.status(404).json({error: "No Results Found"})
    }
    res.status(200).json(focusNote)
}

//update a note
const UpdateFocusNote = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Results Found"})
    }
const focusNote = await FocusNote.findOneAndUpdate({_id:id}, {
    ...req.body
})
if(!focusNote){
    return res.status(404).json({error: "No Results Found"})
}
res.status(200).json(focusNote)
}

//export
module.exports = {
    createNewFocusNote,
    getFocusNote,
    getFocusNotes,
    DeleteFocusNote,
    UpdateFocusNote

}