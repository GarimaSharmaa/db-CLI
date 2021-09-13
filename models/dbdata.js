const mongoose= require('mongoose');

const dataSchema = new mongoose.Schema({
    firstname: string,
    lastname: string,
    phone: number,
    email: string,
});

const dataModel = mongoose.model("user", dataSchema);

module.exports = dataModel;
