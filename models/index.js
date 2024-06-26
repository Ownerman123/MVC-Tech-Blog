const BlogUser = require('./user');
const Comment = require('./comment');
const Blog = require('./blog');

BlogUser.hasMany(Blog ,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(BlogUser, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

BlogUser.hasMany(Comment,{ 
    foreignKey: 'user_id',
    
});

Comment.belongsTo(BlogUser, {
    foreignKey: 'user_id'
})

module.exports = { BlogUser, Blog, Comment}