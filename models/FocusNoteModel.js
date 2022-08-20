const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FocusNoteSchema = new Schema( {
title: {
    type: String,
    required: false
},
note: {
    type:String,
    require:true
}
}, {timestamps:true} )


module.exports = mongoose.model('FocusNote', FocusNoteSchema)