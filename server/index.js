const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log("Hello world");
});

app.post("/update-miro", (req, res) => {
  console.log("request recieved");
  console.log(req.body);
  res.send(200);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});