const router = require('express').Router();
const {User, Blog, Comment} = require('../models');

router.get('/', async (req, res) => {

    //? maybe get blogs later
    try{

    res.render('homepage', {
        logged_in: req.session.logged_in,
        user: req.session.user,
    })
    }catch (err) {
        res.status(500).json(err);
    }

})

router.get("/login", async (req, res) => {
    try{

        res.render('login', {})

    }catch (err) {
        res.status(500).json(err);
    }

});

router.get("/signup", async (req, res) => {
 try{
        res.render('signup', {})
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get("/yourposts", async (req, res) => {
    try{
        
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get("/createpost", async (req, res) => {
    try{
        res.render('createpost',{
            logged_in: req.session.logged_in,
            user: req.session.user,
        })
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get("/viewposts", async (req, res) => {
    try{
        
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

