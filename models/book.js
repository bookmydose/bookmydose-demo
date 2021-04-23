const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    fname : {
        type: String,
        required: true,
        unique: true
    },
    lname : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        unique: true
    },
    dob : {
        type: String,
        required: true,
        unique: true
    },
    city : {
        type: String,
        required: true,
        unique: true
    },
    state : {
        type: String,
        required: true,
        unique: true
    },
    pin : {
        type: String,
        required: true,
        unique: true
    },
    googleId : String
});

const db = mongoose.model('db', userSchema);

mongoose.model.exports = db;
