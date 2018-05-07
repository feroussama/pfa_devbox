const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Admin = require('../models/admin');
const Prop = require('../models/prop');
const Dev = require('../models/dev');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme('jwt');  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });

    Prop.getUserById(jwt_payload._id, (err, prop) => {
      if(err){
        return done(err, false);
      }

      if(prop){
        return done(null, prop);
      } else {
        return done(null, false);
      }
    });

   Prop.getUserById(jwt_payload._id, (err, prop) => {
      if(err){
        return done(err, false);
      }

      if(prop){
        return done(null, prop);
      } else {
        return done(null, false);
      }
    });


    Dev.getDevById(jwt_payload._id, (err, dev) => {
      if(err){
        return done(err, false);
      }

      if(dev){
        return done(null, dev);
      } else {
        return done(null, false);
      }
    });
    
  }));


}
