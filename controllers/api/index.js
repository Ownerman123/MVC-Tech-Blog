const router = require('express').Router();

const userroutes = require('./userroutes');
const blogroutes = require('./blogroutes');
const commentroutes = require('./commentroutes');

router.use('/user', userroutes);
router.use('/blog', blogroutes);
router.use('/comment', commentroutes);

module.exports= router;