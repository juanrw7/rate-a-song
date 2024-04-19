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

export {
  newSong as new
}