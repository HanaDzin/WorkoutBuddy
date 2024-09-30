const express = require("express");
const Workout = require("../models/WorkoutModel");

//1. create an instance of the Express router
const router = express.Router();

//defined routes (request handlers)

//  a) GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// b) GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a workout" });
});

// c) POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body; //extracting data from the request

  //create a new workout document with the received data:
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// d) DELETE a  workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// e) UPDATE a  workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

//2. export the router so the routes can be used in server.js
module.exports = router;
