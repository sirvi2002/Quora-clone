const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true},
    email: { type: String, index: true, unique: true, required: true },
    password: { type: String, required: true }
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", UserSchema);