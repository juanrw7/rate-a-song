import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  author: {type: Schema.Types.ObjectId, ref: "Profile"}
})

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
  review: [reviewSchema],
}, {
  timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}
