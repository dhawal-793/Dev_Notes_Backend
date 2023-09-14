import mongoose from 'mongoose'

const { Schema } = mongoose

const notesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'general'
  },

  date: {
    type: Date,
    default: Date.now
  }
})

const NoteModel = mongoose.model('notes', notesSchema)

export default NoteModel
