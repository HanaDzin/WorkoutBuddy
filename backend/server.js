require("dotenv").config();
const express = require("express");

//1. start up the express app:
const app = express();

//4. setting up some middleware that executes for any request that comes in
//request, response and next
//next = has to be run at the end of middleware in order to move on to the next piece of middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();       //to move onto the remaining code in this file
});

//3. to react to (GET) requests, set up a route handler:
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app!" }); //sends back a JSON string
});

//2. listening for request on certain port number
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
