const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/cooking")
  .then(() => {
    console.log("Connecting to the mongoose!!!");
  })
  .catch((err) => {
    console.log("Oh no! Something went wrong!");
    console.log(err);
  });
// const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(3000, () => {
  console.log(`Listening to the port 3000`);
});
