// 同步所有模型
const sequelize = require("./db");
require("./Comment");
require("./Admin");
require("./Movie");
require("./User");

// sequelize.sync({alter: true}).then(() => {
//   console.log("所有模型同步完成");
// });
