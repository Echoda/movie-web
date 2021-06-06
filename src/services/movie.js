import axios from 'axios';

// 分页获取movie列表
export const getMovieList = (page, limit, name, order) => {
    return axios.get(`/api/movie?page=${page}&limit=${limit}&name=${name || ''}&order=${order || 'id'}`);
}

// 获取单个movie
export const getMovie = (id) => {
    return axios.get(`/api/movie/${id}`);
}

// 修改movie信息
export const updateMovie = (id, obj) => {
    return axios.put(`/api/movie/${id}`, obj)
}

// 新建电影
export const addMovie = (obj) => {
    return axios.post('/api/movie', obj);
}

// 删除电影
export const deleteMovie = (id) => {
    return axios.delete(`/api/movie/${id}`);
}