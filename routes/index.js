const express = require('express');
const router  = express.Router();

// show this message in home url
console.log('router added');
router.get('/', function(req, res) {
    return res.json(400, {
        message: 'Please request the correct routes! Check "https://github.com/amitkr24/hospital-api-development/blob/main/README.md" for documentation.'
    }
)});
router.use('/doctors', require('./doctor')); //routes to all doctors reuqest
router.use('/patients', require('./patient')); //routes to all doctors reuqest
router.use('/reports', require('./report')); //routes to all doctors reuqest

module.exports = router;