const router = require('express').Router();

const apiroutes = require('./api');
const homepageroutes = require('./homepageroutes');

router.use('/api', apiroutes);
router.use('/', homepageroutes);

module.exports= router;
