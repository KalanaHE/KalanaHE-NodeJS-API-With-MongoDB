var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/TestREact", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Connection is made.");
  })
  .on("error", (error) => {
    console.log("error: " + error);
  });
