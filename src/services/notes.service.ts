import NoteModel from '@/models/note.model'
import type { Note } from '@/types'

export const getNotes = async (id: string) => {
  return await NoteModel.find({ userId: id }).then((data) => {
    return data
  })
}

export const getNote = async (id: string) => {
  return await NoteModel.findOne({ _id: id })
}

export const addNote = async (payload: Note) => {
  return await NoteModel.create(payload)
}

export const updateNote = async (id: string, payload: Note) => {
  return await NoteModel.findOneAndUpdate(
    {
      _id: id
    },
    {
      $set: payload
    }
  )
}
export const deleteNote = async (id: string) => {
  return await NoteModel.findOneAndDelete({
    _id: id
  })
}
