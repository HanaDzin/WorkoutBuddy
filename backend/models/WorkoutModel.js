const mongoose = require("mongoose");

//creating a schema for workouts stored in db using mongoose
// schema defines the structure of particular document
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//applying the schema to a model we use to interact with the same-named collection
module.exports = mongoose.model("Workout", workoutSchema);
