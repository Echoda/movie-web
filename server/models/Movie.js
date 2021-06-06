const sequelize = require("./db");
const { DataTypes } = require("sequelize");
//创建一个模型对象
const Movie = sequelize.define(
  "Movie",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    star: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
  }
);

module.exports = Movie;