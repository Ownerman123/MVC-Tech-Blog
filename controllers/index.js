const router = require('express').Router();

// import routes from their locations
const apirouter = require('./api/index');
const homeRouter = require('./Homepage');


//use the routes on the index router
router.use('/api' , apirouter);
router.use('/home', homeRouter);

//export the router

module.exports = router;