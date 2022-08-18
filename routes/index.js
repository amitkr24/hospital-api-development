const express = require('express');
const router  = express.Router();
router.use('/doctors', require('./doctor')); //routes to all doctors reuqest

module.exports = router;