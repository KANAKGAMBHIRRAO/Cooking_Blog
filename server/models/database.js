const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/cooking")
//   .then(() => {
//     console.log("Connecting to the mongoose!!!");
//   })
//   .catch((err) => {
//     console.log("Oh no! Something went wrong!");
//     console.log(err);
//   });

require("./categories");
require("./recipe");
