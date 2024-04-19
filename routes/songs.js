import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as songsCtrl from "../controllers/songs.js"

const router = Router()
// GET localhost:3000/songs
router.get('/', songsCtrl.index)
// GET localhost:3000/songs/new
router.get('/new', isLoggedIn, songsCtrl.new)
// GET localhost:3000/songs/:songId
router.get('/:songId', isLoggedIn, songsCtrl.show)

// POST localhost:3000/songs
router.post('/', isLoggedIn, songsCtrl.create)

// POST localhost:3000/songs/:songId/reviews
router.post('/:songId/reviews', isLoggedIn, songsCtrl.createReview)

export {
  router
}
