const express             = require('express')
const app                 = express()
const port                = 8003
const mongoose            = require('./config/mongoose');
const passport            = require('passport');
const jwtPassportStrategy = require('./config/jwt-passport'); //passport jwt config file

app.use(passport.initialize());
app.use('/',require('./routes/index.js')); //set up scalable routes folder

app.listen(port, function (err) {
    if (err) {
        console.log('An error occured in running the server!');
    }
        console.log(`Server is up and running on PORT :: ${port}`);
});