const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const Patient = require('../controller/patient_controllers');

router.post('/register',Patient.register);

module.exports = router;