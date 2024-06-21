const router = require('express').Router();
const {Blog,User,Comment} = require('../../models')

router.post('/', async (req, res)=> {

    try{
    const newBlog = await Blog.create(req.body);
    res.status(200).json(newBlog);
}catch (err) {
    res.status(500).json({message: err});
}
});

router.put('/like', async (req, res)=> {

    try{
    const blog =  await Blog.findByPk(req.body.post_id);
    console.log('OVER HERE', blog.likedby);
    const likedby = blog.likedby;
    const likes = blog.likes;
    console.log('RIGHT HERE', likedby);
    

    if(!likedby.includes(req.body.user_id))
        {
           
           likedby.push(req.body.user_id);
           console.log(likedby);

           await Blog.update({
            likes: likes + 1,
            likedby: likedby},{where: {id: req.body.post_id}})
        }else{
            throw new Error('already liked');
        }
        res.status(200).json({messsage: 'liked!'})
    }catch (err) {
        res.status(500).json(err)
    }
});

module.exports= router;