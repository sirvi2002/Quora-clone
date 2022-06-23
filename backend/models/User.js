const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String, 
    email: String,
    password: String,
    confirm_password : String
});

module.exports = mongoose.model("Users", UserSchema);