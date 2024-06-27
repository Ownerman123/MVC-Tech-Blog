const router = require('express').Router();
const {BlogUser, Blog, Comment} = require('../models');
const checkSessionTimeout = require('../utils/checksess');


router.get('/', async (req, res) => {

    
    try{

        const dbblogs = await Blog.findAll({include: [
            {
              model: BlogUser,
              attributes: ['name'],
            },
          ],});
        
          let blogs = dbblogs.map((blog) => blog.get({plain: true}));

    res.render('homepage', {
        logged_in: req.session.logged_in,
        user: req.session.user,
        blogs
    })
    }catch (err) {
        res.status(500).json(err);
    }

})

router.get("/login", async (req, res) => {
    try{

        if(req.query.redirected){
            res.render('login', {redirected: true});
        }else{
            res.render('login', {});
        }

        

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

router.get("/yourposts", checkSessionTimeout, async (req, res) => {

    

    try{
        const dbblogs = await Blog.findAll({
            
            where: {user_id: req.session.user.id},
            include: [
                        {
                        model: BlogUser,
                        attributes: ['name'],
                         },
                    ],
        });
        
          let blogs = dbblogs.map((blog) => blog.get({plain: true}));
          
           
        res.render('posts', {
            logged_in: req.session.logged_in,
            user: req.session.user,
            onusersposts:  true,
            blogs,

        })
        
    }catch (err) {
        res.status(500).json(err);
    }

});

router.get("/createpost",checkSessionTimeout, async (req, res) => {

  

    try{
        res.render('createpost',{
            logged_in: req.session.logged_in,
            user: req.session.user,
        })
    }catch (err) {
        res.status(500).json(err);
    }


});

router.get("/editpost/:id",checkSessionTimeout, async (req, res) => {

  

    try{

        const oldData = await Blog.findByPk(req.params.id);



        res.render('editpost',{
            logged_in: req.session.logged_in,
            user: req.session.user,
            oldtitle: oldData.title,
            oldcontent: oldData.content,
            post_id: req.params.id,
        })
    }catch (err) {
        res.status(500).json(err);
    }


});

router.get("/viewposts", async (req, res) => {
    try{
        const dbblogs = await Blog.findAll({include: [
            {
              model: BlogUser,
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

router.get("/post/:id",checkSessionTimeout, async (req, res) => {

    try{
    const dbpost = await Blog.findByPk(req.params.id, {
        include: [
            {
             model: BlogUser,
             attributes: ['name']
            },
            {
                model: Comment,
                attributes:['content','date_created'],
                include: [{
                    model: BlogUser,
                    attributes: ['name']
                }]
            }
        ],
    });
    
    const post = dbpost.get({plain: true});
    console.log('LOOK A POST', post);
   

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

