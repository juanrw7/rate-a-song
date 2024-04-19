import { Song } from "../models/song.js";

function newSong(req, res) {
  res.render("songs/new", {
    title: "Add a Song"
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.addedBy = req.user.profile._id
  Song.create(req.body)
  .then(song => {
    res.redirect("/songs")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function index(req, res) {
  Song.find({})
  .then(songs => {
    res.render("songs/index", {
      title: "All of the Songs",
      songs,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function show (req, res) {
  Song.findById(req.params.songId)
  .populate("addedBy")
  .then(song => {
    res.render("songs/show", {
      title: "Song Details",
      song,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/songs")
  })
}

export {
  newSong as new,
  create,
  index,
  show,
}