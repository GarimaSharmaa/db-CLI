const db = require("./config/db");
const dbData = require("./models/dbdata");

// Running mongoose locally 
db();

// Create the user
const addUser = (user) => {
  dbData.create(user).then((user) => {
    console.log("New user is added to the database");
    db.close();
  });
};

// Find the user
const findUser = (name) => {
  // make it case insensitive
  const search = new RegExp(name, "i");
  dbData
    .find({ $or: [({ finstname: search }, { lastname: search })] })
    .then((user) => {
      console.log(user);
      console.log(`${user.length} matches found`);
      db.close();
    });
};

module.exports = {
  addUser,
  findUser,
};
