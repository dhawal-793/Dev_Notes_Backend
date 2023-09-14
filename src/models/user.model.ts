import mongoose from 'mongoose'

const { Schema } = mongoose

const usersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})
const UserModel = mongoose.model('users', usersSchema)

export default UserModel
