const router = require('express').Router();
const {User, Blog, Comment} = require('../models');

router.get('/', async (req, res) => {

    //? maybe get blogs later
    try{

    res.render('homepage', {})
    }catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;

