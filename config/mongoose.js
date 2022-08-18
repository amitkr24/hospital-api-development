const mongoose = require('mongoose'); //required mongoose
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/hospital_api_development'); //connection to db
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connection to MongoDB!')); //if error occured
db.once('open',function(){
    //if connected successfully
    console.log('Successfully connected to monogoDb');
});