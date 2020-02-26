const User = require('../Model/user.modal');

// import sha256 from 'crypto-js/sha256';

var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");

var express = require('express');
var router = express.Router();


const server = require('../server.js');

const session = require('express-session');

exports.test = function (req, res) {
  res.send();
}



exports.getallusers = function (req, res) {




  User.find(function (err, musicusers) {
    if (err) {
      console.log(err);

    } else {
      res.json(musicusers);
      // console.log(musicusers);

    }
  });
};



exports.getuserfromid = function (req, res) {
  console.log("Reques >>>>>>>>>>>" + req.query.id);
  var id = req.query.id

  User.findById(id, function (err, musicusers) {
    if (err) {
      console.log(err);

    } else {
      res.json(musicusers);
    }
  });
};





exports.registerUser = function (req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var dob = req.body.dob;
  var gender = req.body.gender;
  var password = req.body.password;


  // password = CryptoJS.AES.encrypt(password,'').toString();



  if (fname == "" || lname == "" || email == "" || dob == "" || gender == "" || password == "" || fname == null || lname == null || email == null || dob == null || gender == null || password == null) {

    console.log("Fname Empty");
    res.send("Filed are empty");
    // res.send(fname, lname, email, dob, gender, password);

  } else {



    let user = new User({
      fname: fname,
      lname: lname,
      email: email,
      dob: dob,
      gender: gender,
      password: password
    });



    // console.log(user);

    user.save().then(
      user => {
        res.status(200).json({ 'user': 'user added sucess' })

      }
    ).catch(err => {
      res.status(400).send(err);

    })


  }



};


exports.userlogin = function (req, res) {
  var email = req.body.username;
  var password = req.body.password;

  // password = CryptoJS.AES.encrypt(password, '').toString();


  User.findOne({ email: email, password: password }, function (err, user) {

    if (!user) {
      res.json({ respone: 'Not Found' })


    } else {
      req.session.user = user

      res.json({ respone: 'User Found', _id: user._id })
    }



  })
}



