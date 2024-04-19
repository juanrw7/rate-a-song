import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  artist:{
    type: String,
    required: true
  },
  releaseYear: {
    type: Number, 
  },
  addedBy:{type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}
