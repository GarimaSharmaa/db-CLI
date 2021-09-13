const mongoose= require('mongoose');

const dataSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
});

const dataModel = mongoose.model("user", dataSchema);

module.exports = dataModel;
