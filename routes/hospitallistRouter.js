const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const HospitalRouter = express.Router();

const Hospital = require('../models/hospital');

var allhospitals = Hospital.find({});

//   Hospital route
HospitalRouter.route("/")
.get((req, res) => {
  allhospitals.exec((err, data) => {
    if(err){
      console.log(err);
    }else {
      res.render("Hospital-list", {hospitals: data});
    }
  });
})
// .get((req, res) => {
//   Hospital.find({}, (err, foundItems) =>{

//       if(foundItems.length === 0)
//       {
//         Hospital.insertMany(addedHospitals, (err)=>{
//           if(err){
//             console.log(err);
//           }
//           else {
//             console.log("Added Default Hospitals!");
//           }
//         });
//         res.redirect("Hospital-list");

//       } else {
//         res.render("Hospital-list", {hospitals: addedHospitals});
//       }
//   });
// })
.post((req, res) => {
  const hname = req.body.name;
  const hphone = req.body.phone;
  const email = req.body.emailid;
  const date = req.body.date;
  const haddress = req.body.address;
  const city = req.body.city;
  const state = req.body.state;

  const newhospital = new Hospital({
      hospitalname: hname,
      hospitalphone: hphone,
      hospitaladdress:haddress
  });
    newhospital.save((err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Hospital added successfully");
            res.redirect("/");
        }
    });
});
  
module.exports = HospitalRouter;
