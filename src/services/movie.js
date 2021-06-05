import axios from 'axios';

export const getMovieList = (page, limit, name, order) => {
    return axios.get(`/api/movie?page=${page}&limit=${limit}&name=${name}&order=${order}`);
}