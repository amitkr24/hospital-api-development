const express = require('express');
const router  = express.Router();
router.use('/doctors', require('./doctor')); //routes to all doctors reuqest
router.use('/patients', require('./patient')); //routes to all doctors reuqest
router.use('/reports', require('./report')); //routes to all doctors reuqest

module.exports = router;