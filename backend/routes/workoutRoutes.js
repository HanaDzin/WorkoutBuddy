const express = require("express");
const Workout = require("../models/WorkoutModel");
const {
  gettAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

//1. create an instance of the Express router
const router = express.Router();

//defined routes (request handlers)

//  a) GET all workouts
router.get("/", gettAllWorkouts);

// b) GET a single workout
router.get("/:id", getWorkout);

// c) POST a new workout
router.post("/", createWorkout);

// d) DELETE a  workout
router.delete("/:id", deleteWorkout);

// e) UPDATE a  workout
router.patch("/:id", updateWorkout);

//2. export the router so the routes can be used in server.js
module.exports = router;
