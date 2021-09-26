const mongoose = require("mongoose");

module.exports = function db() {
  mongoose
    .connect("mongodb://localhost:27017/datadb", {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
};
