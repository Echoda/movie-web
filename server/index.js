const sequelize = require('./models/db');
const sync = require('./models/sync'); // 同步所有模型
const adminService = require('./services/adminService');


// const adminService = require('./services/adminService');
// const userService = require('./services/userService');


// service测试
// userService.login('Frank',2087390420).then(res => {
//   console.log(res)
// })


// 管理员账号
adminService.addAdmin({
  adminname: 'lan.sun',
  adminpwd: 990421,
})

// 测试连接
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })();
