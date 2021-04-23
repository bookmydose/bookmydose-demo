const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema ({
    name : {
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

const hospitaldb = mongoose.model('hospitaldb', hospitalSchema);

mongoose.model.exports = hospitaldb;
