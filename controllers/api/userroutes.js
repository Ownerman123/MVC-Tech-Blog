const router = require('express').Router();
const {User, Blog, Comment} = require('../../models');
const { destroy } = require('../../models/user');

router.post('/', async (req, res) => {
    try{
    const newUser = await User.create(req.body);
    req.session.logged_in = true;
    req.session.user = newUser;
    res.status(200).json(newUser);
    }catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
    const user = await User.findOne({where: {email: req.body.email}});
    if(!user){
        res.status(400).json({message: 'Incorrect email or password, please try again'});
        return;
    }
    const vallidpassword = await user.checkPassword(req.body.password);
    if(!vallidpassword){
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }


    req.session.save(() => {
        req.session.user = user;
        req.session.logged_in = true;
        
        res.json({ user: user, message: 'You are now logged in!' });
      });
    }catch (err){
        console.log(err);
        res.status(400).json(err);
    }

});

router.get('/logout', async (req,res)=> {
    try{
        if (req.session.logged_in) {
            req.session.destroy(() => {
            res.status(204).json({message: "user logged out"});
            });
          } else {
            res.status(404).json('there aint no one to log out');
          }
}catch (err){
    res.status(500).json({message: `failed to log out ${err}`})
}
})

module.exports= router;