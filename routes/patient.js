const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const passport = require('passport');
const patient_controllers = require('../controller/patient_controllers'); //patient controller added

//route for registering a new aptient with jwt auth
router.post('/register', passport.authenticate('jwt', { session: false }), patient_controllers.register); //register patient
//route for creating a new report with jwt auth
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patient_controllers.reportCreate); //report created
router.get('/:id/reports', patient_controllers.reportList); // report listing

module.exports = router;