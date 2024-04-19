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
    min: 1,
    max: 10,
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
    min: 1700, 
  },
  addedBy:{type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema],
}, {
  timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}
