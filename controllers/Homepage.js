const router = require('express').Router();

router.get('/', (req, res) => {

    try{

        // do things before rendering

        res.render('homepage', { 
            // object to contain objects and other keys to pass to handlebars.
        })
    }catch (err){ res.status(500).json(err); }

});

router.get('/login', (req, res)=> {

    try{

        // do things before rendering

        res.render('loginpage', { 
            // object to contain objects and other keys to pass to handlebars.
        })
    }catch (err){ res.status(500).json(err); }


});

module.exports = router;