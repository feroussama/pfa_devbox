const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Dev = require('../models/dev');
// Register
router.post('/registre', (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    adresse: req.body.adresse,
    city: req.body.city,
   state: req.body.state,
    email: req.body.email,
    
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
console.log(password);
console.log("hello test ");

  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, { 
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            lastname: user.lastname,
            firstname: user.firstname,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
/*
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/




/*
router.post("/deleteUser",function(req,res){      
  User.remove({ _id: req.body.id }, function(err) {    
   if(err){    
       res.send(err);    
   }    
   else{      
          res.send({data:"Record has been Deleted..!!"});               
      }      
}); 
 })  
 */

/*
router.delete('/delete/:id',function(req,res){

var id=req.params.id;
User.findOneAndRemove({_id:id},function(err){

if(err){
  console.log(err);
  return res.status(500).send();
}
return res.status(200).send();
})



})
*/
/*
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/

router.post('/accepte', (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    email:req.body.email,
    password:req.body.password
   

  })

  Dev.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register '});
    } else {
      res.json({success: true, msg:'Projet registered'});
    }
  });
});
router.delete('/:user_id', function(req, res) {
  console.log(req.params.user_id);
  let id = req.params.user_id;
  User.remove({
  _id : id
  }, function(err) {
  if (err)
  res.send(err);
  else
  res.send('Successfully! Employee has been Deleted.'); 
  });
 });



 router.post('/categorie/:categorieDev', (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    email:req.body.email,
    password:req.body.password
   

  })
let c=req.params.categorieDev;
  c.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register '});
    } else {
      res.json({success: true, msg:'Projet registered'});
    }
  });
});














 router.get('/show', function(req,res) {
  User.all((result) => res.json(result));
})
module.exports = router;