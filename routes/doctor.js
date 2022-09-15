const express           = require('express');
const router            = express.Router();
const jwt               = require('jsonwebtoken'); //used to decode jwt token
const DoctorController  = require('../controller/doctor_controllers'); // doctor controller added

console.log('doctor route loading');

router.post('/register', DoctorController.CreateDoctor); //route for registering a new doctor
router.post('/login', DoctorController.DoctorLogin); //route for loggin in a doctor

module.exports = router;
