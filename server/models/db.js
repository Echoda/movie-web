const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("movie_web", "root", "990421", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;