const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.DATABASE_URL);
const DATABASE_URL =
  "mongodb+srv://mira-v1:password1234@cluster0.siye4oj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL);

const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/app`, router);

// app.get("/app", async (request, response) => {
//   console.log("hey");
//   response.send({ hello: "world" });
// });

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  // mongoose.connect(process.env.DATABASE_URL);
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};
