const express  = require('express');
const router   = express.Router();
const jwt      = require('jsonwebtoken'); //jwt web token added
const passport = require('passport'); // passort added
const report_controller = require('../controller/report_controllers'); // report controller added

router.get('/:status',report_controller.filterReport); // filter as per report status 

module.exports = router;