const Comment = require("../models/Comment");

// 创建评论
exports.addComment = async function (commentObj) {
    const ins = await Comment.create(commentObj);
    return ins.toJSON();
};

// 删除评论（管理员）
exports.deleteComment = async function (commentId) {
    const result = await Comment.destroy({
        where: {
            id: commentId,
        },
    });
    return result;
};

// 获取某一个
// exports.getCommentById = async function (id) {
//     const result = await Comment.findByPk(id);
//     if (result) {
//         return result.toJSON();
//     }
//     return null;
// };

// 根据movieId获取评论列表
exports.getComments = async function (
    page = 1,
    limit = 10,
    movieId = ""
) {
    const result = await Comment.findAndCountAll({
        where: {
            movieId: movieId,
        },
        offset: (page - 1) * limit,
        limit: +limit,
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows)),
    };
};