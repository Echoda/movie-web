const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const Movie = require('./Movie');
const User = require('./User');

//创建一个模型对象
const Comment = sequelize.define(
  "Comment",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    updatedAt: false,
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
  }
);

// 关联
Comment.belongsTo(Movie);
Comment.belongsTo(User);

module.exports = Comment;