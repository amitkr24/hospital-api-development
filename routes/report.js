const express  = require('express');
const router   = express.Router();
const jwt      = require('jsonwebtoken');
const passport = require('passport');
const report_controller = require('../controller/report_controllers');

router.get('/:status',report_controller.filterReport);

module.exports = router;