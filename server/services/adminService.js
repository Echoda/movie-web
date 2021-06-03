const Admin = require("../models/Admin");
const md5 = require("md5");

// 注册新管理员
exports.addAdmin = async function (adminObj) {
    adminObj.adminpwd = md5(adminObj.adminpwd);
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
};