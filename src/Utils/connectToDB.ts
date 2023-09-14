import mongoose from 'mongoose'
import CONFIG from '../config/environment'

mongoose
  .connect(`${CONFIG.db}`)
  .then(() => {
    console.log('Connected to Mongo Successfully')
  })
  .catch((error) => {
    console.error(error)
  })
