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
    res.redirect("/songs/new")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  newSong as new,
  create,
}