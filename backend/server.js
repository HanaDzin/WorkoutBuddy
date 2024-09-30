require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

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

//connecting to the database:
mongoose
  .connect(process.env.MONGO_URI) //asynchronous -> returns a promise
  .then(() => {
    app.listen(process.env.PORT, () => {
      //only listening to request once we are connected
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
