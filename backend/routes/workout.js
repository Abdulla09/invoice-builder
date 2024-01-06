const express = require("express")
const Workout = require("../models/workoutModel")
const {
  createWorkout,
} = require("../controllers/workoutController")

const router = express.Router()

router.get('/',(req,res) => {
  res.json({ok:"hey"})
})

router.post('/',createWorkout)

module.exports = router