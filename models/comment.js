const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      date_created: {
          type: DataTypes.DATEONLY,
          defaultValue: DataTypes.NOW
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
          model: 'bloguser',
          key: 'id',
        },
      },
      blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
          model: 'blog',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
