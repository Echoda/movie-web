import axios from 'axios';

// 分页获取movie列表
export const getMovieList = (page, limit, name, order) => {
    return axios.get(`/api/movie?page=${page}&limit=${limit}&name=${name}&order=${order}`);
}

// 获取单个movie
export const getMovie = (id) => {
    return axios.get(`/api/movie/${id}`);
}