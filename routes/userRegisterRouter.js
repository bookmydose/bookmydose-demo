const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const userRegisterRouter = express.Router();

const User = require('../models/users');

// Users-registration route

userRegisterRouter.route("/")
.get((req, res) => {
    res.render("Vaccine_registration");
});

module.exports = userRegisterRouter;