const Admin = require("../models/Admin");
const md5 = require("md5");

// 注册新管理员
exports.addAdmin = async function (adminObj) {
    adminObj.adminpwd = md5(adminObj.adminpwd);
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
};

// 管理员登录
exports.login = async function (adminname, adminpwd) {
    adminpwd = md5(adminpwd)
    console.log(md5('990421'))
    console.log(adminname, adminpwd)
    const result = await Admin.findOne({
        where: {
            adminname,
            adminpwd,
        },
    });
    if (result && result.adminname === adminname) {
        return result.toJSON();
    }
    return null;
};