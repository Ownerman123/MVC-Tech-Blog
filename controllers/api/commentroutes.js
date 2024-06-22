const router = require('express').Router();
const {Blog,User,Comment} = require('../../models')

router.post('/', async (req, res)=> {

    try{
    const newComment = await Comment.create(req.body);
    res.status(200).json(newComment);
}catch (err) {
    res.status(500).json({message: err});
}
});

module.exports= router;