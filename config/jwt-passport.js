const passport      = require('passport');
const JwtStrategy   = require('passport-jwt').Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;
const Doctor        = require('../model/doctor');

// set secretkey
let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'NMaSNppZvKmDVqtVwaUWLBviPaO5qa9X', //secret key used to encrypt/decrypt
}

//passport use
passport.use(new JwtStrategy(opts, function(jwtPayLoad, done) {
    Doctor.findById(jwtPayLoad._id, function(err, doctor){
        if(err) {
            //if error occured
            console.log('Error in finding user --> Passport JWT');
            return done(err);
        }
        if(doctor) {
            //if doctor found
            return done(null, doctor);
        }else {
            //if doctor not found
            return done(null, false);
        }
    })
}));

module.exports = passport;