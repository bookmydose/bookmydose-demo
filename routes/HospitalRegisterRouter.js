const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const HospitalRegisterRouter = express.Router();

const Hospital = require('../models/hospital');

// Hospital-registration route

HospitalRegisterRouter.route("/")
.get((req, res) => {
    res.render("Hospital-registration");
});

module.exports = HospitalRegisterRouter;