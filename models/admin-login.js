const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema ({
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
    googleId : String
});

const admindb = mongoose.model('admindb', adminSchema);

mongoose.model.exports = admindb;
