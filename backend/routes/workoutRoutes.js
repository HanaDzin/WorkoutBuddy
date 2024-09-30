const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "POST a workout" });
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
