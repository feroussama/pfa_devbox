

var fs=require('fs');
var conf=JSON.parse(fs.readFileSync("package.json"))
var nodemailer=require('nodemailer');
var randomstring = require("randomstring");
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/dev');


router.post('/', (req, res, next) => {
var p=randomstring.generate(7); 
console.log(p);  
User.findOne({email:req.body.email},function(err,foundObject)
{
if(err){
  console.log(err);
  res.status(500).send();
}else{
if(!foundObject){
  res.status(404).send();
} else{
foundObject.password=p;

  }
foundObject.save(function(err,updateObject){
if(err){
  console.log(err);
  ras.status(500).send();
}else{
  res.send(updateObject);
}

});
}
});


let transporter=nodemailer.createTransport({
    service:'gmail',
    secure:false,
    port:25,
    auth:{
      user:'pfa1718@gmail.com',
      pass:'pfa12345'
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  let helperOption={
    from:'pfa1718@gmail.com',
    to:req.body.email,
    subject:'Notification-DEVBOX',
    text:req.body.tex
  };
  transporter.sendMail(helperOption,(error,info)=>{
    if(error){
      return console.log(error);
    }
    console.log("succes");
    console.log(info);
  }
  );
});

module.exports = router;