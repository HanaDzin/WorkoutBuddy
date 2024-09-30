require("dotenv").config();
const express = require("express");

const workoutRoutes = require("./routes/workoutRoutes");

//1. start up the express app:
const app = express();

//in order to work with the req object (when sending data), we need to use this middleware:
app.use(express.json());

//4. setting up some middleware that executes for any request that comes in
//request, response and next
//next = has to be run at the end of middleware in order to move on to the next piece of middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //to move onto the remaining code in this file
});

//when making calls to /api/workouts, these routes are used
app.use("/api/workouts", workoutRoutes);

//2. listening for request on certain port number
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
