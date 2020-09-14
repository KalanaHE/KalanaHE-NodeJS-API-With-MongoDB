const express = require("express");
const app = express();
const DBconnection = require("./connection");
const bodyParser = require("body-parser");

DBconnection;
app.use(bodyParser.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(4000);
