const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from inside");
});

const port = 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
