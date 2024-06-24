const router = require('express').Router();
const { compareSync } = require('bcrypt');
const {Blog,User,Comment} = require('../../models')
const checkSessionTimeout = require('../../utils/checksess');

router.post('/', checkSessionTimeout, async (req, res)=> {

    try{
    const newBlog = await Blog.create(req.body);
    res.status(200).json(newBlog);
}catch (err) {
    res.status(500).json({message: err});
}
});

router.put('/like',checkSessionTimeout, async (req, res)=> {

    try{
    const blog =  await Blog.findByPk(req.body.post_id);
    const likedby = blog.likedby;
    const likes = blog.likes;
    
    

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

router.delete('/:id', async (req, res) => {

    try{

    await Blog.destroy({where: {id: req.params.id}});
        res.status(200).json({message: 'deleted as planned'})
    } catch (err){
        res.status(500).json(err);
    }

});
router.put('/:id', async (req, res)=> {

    try{
        console.log(req);


        await Blog.update(
            
            //updateable fields
            {
                title: req.body.title,
                content: req.body.content,
            },
        
            {where: { id: req.params.id}},
    
        ).then((updatedPost) => {
            res.json(updatedPost);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });

     

    }catch (err){
        res.status(500).json(err);
    }


});

module.exports= router;