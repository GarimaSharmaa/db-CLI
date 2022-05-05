const db = require("./config/db");
const dbData = require("./models/dbdata");
const mongoose = require("mongoose");

// Running mongoose locally
db();


// Create the user
const addUser = (user) => {
  dbData.create(user).then((user) => {
    console.log("New user is added to the database");
    mongoose.connection.close();
  });
};

// Find the user
const findUser = (name) => {
  const search = new RegExp(name, "i"); //regular expression to search
  dbData
    .find({ $or: [{ firstname: search }, { lastname: search }] })
    .then((user) => {
      console.log(user);
      console.log(`${user.length} match(es) found`);
      mongoose.connection.close();
    });
};

// Update user
const updateUser = (_id, user) => {
  dbData.findByIdAndUpdate({ _id }, user).then((user) => {
    console.log("User updated successfully");
    mongoose.connection.close();
  });
};

// Remove user
const removeUser = (_id) => {
  dbData.findByIdAndRemove({ _id }).then((user) => {
    console.log("User removed successfully");
    mongoose.connection.close();
  });
};

// List users
const listUser = () => {
  dbData.find({}).then((user) => {
    console.log(user);
    console.log(`${user.length} match(es) found`);
    mongoose.connection.close();
  });
};

module.exports = {
  addUser,
  findUser,
  updateUser,
  removeUser,
  listUser
};
