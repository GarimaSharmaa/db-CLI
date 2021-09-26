const mongoose = require("mongoose");

module.exports = function userdb() {
  mongoose
    .connect("mongodb://localhost:27017/datadb", {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
