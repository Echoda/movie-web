const Movie = require('../models/Movie')
const { Op } = require("sequelize");

// 查 列表  对name和sort两个列进行模糊查询
exports.getMovies = async function (
    page = 1,
    limit = 10,
    name = "",
    order = "id"
) {
    const result = await Movie.findAndCountAll({
        where: {
            [Op.or]: [
                {name : {[Op.like]: `%${name || ''}%`}},
                {sort : {[Op.like]: `%${name || ''}%`}}
            ]
        },
        offset: (page - 1) * limit,
        limit: +limit,
        order: [
            [order, 'DESC']
        ]
    });

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows)),
    };
};

// 查 单个
exports.getMovieById = async function (id) {
    const result = await Movie.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 增
exports.addMovie = async function (movieObj) {
    const ins = await Movie.create(movieObj);
    return ins.toJSON();
};

// 删
exports.deletMovie = async function (id) {
    const result = await Movie.destroy({
        where: {
            id: id,
        },
    });
    return result;
};

// 改
exports.updateMovie = async function (id, movieObj) {
    const result = await Movie.update(movieObj, {
        where: {
            id,
        },
    });
    return result;
};

