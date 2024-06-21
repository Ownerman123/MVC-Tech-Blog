const router = require('express').Router();
const {User, Blog, Comment} = require('../models');
const { getAttributes } = require('../models/user');

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
        const dbblogs = await Blog.findAll({include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],});
        
          const blogs = dbblogs.map((blog) => blog.get({plain: true}));
        res.render('posts', {
            logged_in: req.session.logged_in,
            user: req.session.user,
            blogs,

        })
        
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {

    try{
    const dbpost = await Blog.findByPk(req.params.id, {
        include: [
            {
             model: User,
             attributes: ['name']
            }
        ],
    });
    
    const post = dbpost.get({plain: true});
   

    res.render('post', {
        logged_in: req.session.logged_in,
        user: req.session.user,
        post: post,
    });

}catch (err){
    res.status(500).json(err);
}



});

module.exports = router;

