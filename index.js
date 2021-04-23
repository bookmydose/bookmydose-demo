const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// DB

// mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost:27017/hositalDB", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);

// Home route

app.route("/")
.get((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Admin login route
app.route("/login")
.get((req, res) => {
    res.render("Admin-login");
})
.post((req, res) => {

    const email = req.body.email;
    const pass = req.body.password;
  
    if(email === "admin@bookmydose.com" && pass === "1234")
    {
      //console.log("Success!");
      res.sendFile(__dirname + "/public/Admin-dashboard.html");
    }
    else {
      res.sendFile(__dirname + "/public/login-failure.html")
      //console.log("Failure!");
    }
});

// Users-registration DB

const userSchema = {
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    city: String,
    State: String,
    Adhar: String
};

const User = mongoose.model("User", userSchema);

const u1 = new User({
    firstname: "Dikshita Kambri",
    lastname: "Kambri",
    phone: "1234567890",
    email: "dikshita@123.com",
    city: "Mumbai",
    State: "Maharashtra",
    Adhar:"468586161616"
  });
  
  const u2 = new User({
    firstname: "Bhargav",
    lastname: "Joshi",
    phone: "1234567890",
    email: "bhargav@123.com",
    city: "Mumbai",
    State: "Maharashtra",
    Adhar:"668586161616"
  });

  const addedUsers = [u1, u2];

//   User route

app.route("/users")
.get((req, res) => {
    User.find({}, (err, foundItems) =>{

        if(foundItems.length === 0)
        {
          User.insertMany(addedUsers, (err)=>{
            if(err){
              console.log(err);
            }
            else {
              console.log("Added Default Users!");
            }
          });
          res.redirect("Users");
  
        } else {
          res.render("Users", {users: addedUsers});
        }
    });
});

// Users-registration route

app.route("/register")
.get((req, res) => {
    res.render("Vaccine_registration");
})
.post((req, res) => {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const phone = req.body.phone;
    const adhar = req.body.Adhar;
    const email = req.body.emailid;
    const date = req.body.date;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.lastname;

    const newu = new User({
        firstname: fname,
        lastname: lname,
        phone: phone,
        email: email,
        city: city,
        State: state,
        Adhar:adhar
      });

      addedUsers.push(newu);
      newu.save((err) => {
          if(err){
              console.log(err);
          }else{
              console.log("User added successfully");
              res.render("Appointment-form");
          }
      });
});

// Users-registration DB
const hospitalSchema = {
  name: String,
  address: String,
  phone: String,
};

const Hospital = mongoose.model("Hospital", hospitalSchema);

const hospital1 = new User({
  name: "Asian Heart Institute",
  address: "Bandra-Kurla Complex",
  phone: "1234567890"
});
const hospital2 = new User({
  name: "Bhabha Hospital",
  address: "Bandra",
  phone: "1234567890"
});
  
const addedHospitals = [hospital1, hospital2];

// Hospital route

app.route("/hospitals-registration")
.get((req, res) => {
    res.render("Hospital-registration");
})
.post((req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.emailid;
    const date = req.body.date;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;

    const newhospital = new Hospital({
        name: name,
        phone: phone,
        address:address
      });

      addedHospitals.push(newhospital);
      newhospital.save((err) => {
          if(err){
              console.log(err);
          }else{
              console.log("Hospital added successfully");
              res.render("/");
          }
      });
});


app.listen(5000, function() {
    console.log("Server started on port 5000");
}); 