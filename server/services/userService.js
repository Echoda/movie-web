const User = require("../models/User");
// const md5 = require("md5");
const Comment = require('../models/Comment');

// 获取用户列表
exports.getUsers = async function (
    page = 1,
    limit = 10,
    // name = ""
) {

    // const where = {};
    // if (name) {
    //   where.name = {
    //     [Op.like]: `%${name}%`,
    //   };
    // }

    const result = await User.findAndCountAll({
        //   where,
        offset: (page - 1) * limit,
        limit: +limit,
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows)),
    };
};

// 获取某一个用户的信息
exports.getUserById = async function (id) {
    const result = await User.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 注册新用户
exports.addUser = async function (userObj) {
    // userObj.userpwd = md5(userObj.userpwd);
    const ins = await User.create(userObj);
    return ins.toJSON();
};

// 注销用户
exports.deleteUser = async function (userId) {
    const result = await User.destroy({
        where: {
            id: userId,
        },
    });
    await Comment.destroy({
        where: {
            UserId: userId,
        },
    });
    return result;
};

// 修改用户信息
exports.updateUser = async function (id, userObj) {
    // if (userObj.userpwd) {
    //     userObj.userpwd = md5(userObj.userpwd);
    // }
    const result = await User.update(userObj, {
        where: {
            id,
        },
    });
    return result;
};


// 用户登录
exports.login = async function (username, userpwd) {
    // userpwd = md5(userpwd)
    const result = await User.findOne({
        where: {
            username,
            userpwd,
        },
    });
    if (result && result.username === username) {
        return result.toJSON();
    }
    return null;
};