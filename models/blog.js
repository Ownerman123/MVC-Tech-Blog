const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {
  addlike() {
     
     this.likes = this.likes++;
   }
}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date_created: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    likes:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    likedby: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
      user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      references: {
        model: 'bloguser',
        key: 'id',
      },
      
    },
    
    },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;
