const express = require("express");
const serverless = require("serverless-http");
// const mongoose = require("mongoose");

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

// Use the router to handle requests to the `/.netlify/functions/api` path
// app.use(`/.netlify/functions/app`, router);
app.use(`/app`, router);

// Export the app and the serverless function
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  // mongoose.connect(process.env.DATABASE_URL);
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};
