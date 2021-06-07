const Comment = require("../models/Comment");
const User = require("../models/User");
const {updateStar, getMovieById} = require('./movieService');
require('../models/relation');

const getUserName = async(it,id) => {
    const user = await User.findOne({
        where: {
            id: id
        },
    });
    const username = user.toJSON().username;
    it = {
        ...it,
        username: username
    };
    return it;
}

// 根据movieId获取评论列表 不做分页
exports.getComments = async function (
    // page = 1,
    // limit = 10,
    movieId = ""
) {
    const result = await Comment.findAndCountAll({
        order: [
            ['createdAt', 'DESC']
        ],
        // attributes: ['content', 'createdAt', 'UserId', 'star'],
        where: {
            movieId: movieId,
        },
    });

    const proList = [];
    const res = [...JSON.parse(JSON.stringify(result.rows))];
    res.forEach((it) => {
        proList.push(getUserName(it, it.UserId));
    })
    const proResult = await Promise.all(proList).then(res =>  res);
    
    return {
        total: result.count,
        datas: proResult
    };
};

// 获取某一个
// exports.getCommentById = async function (id) {
//     const result = await Comment.findByPk(id);
//     if (result) {
//         return result.toJSON();
//     }
//     return null;
// };

// 增
exports.addComment = async function (commentObj) {
    console.log(commentObj, 'commentobj')
    const ins = await Comment.create(commentObj);
    // 计算新的评分平均值
    const starNum = await Comment.count({
        where: {
          MovieId: commentObj.MovieId
        }
      });
    const movie = await getMovieById(commentObj.MovieId);
    // console.log(starNum, movie, movie.star, 'movie');
    const originAvgStar = movie.star || 0; 
    const newAvgStar = (+originAvgStar + (+commentObj.star - (+originAvgStar)) / starNum).toFixed(1);
    await updateStar(newAvgStar, commentObj.MovieId);

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