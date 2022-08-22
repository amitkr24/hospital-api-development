const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const passport = require('passport');
const patient_controllers = require('../controller/patient_controllers');

//route for registering a new aptient with jwt auth
router.post('/register', passport.authenticate('jwt', { session: false }), patient_controllers.register);
//route for creating a new report with jwt auth
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patient_controllers.reportCreate);
router.get('/:id/reports', patient_controllers.reportList);

module.exports = router;