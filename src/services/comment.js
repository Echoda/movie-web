import axios from 'axios';

export const getComments = (id) => {
    return axios.get(`/api/comment?movieId=${id}`);
}

export const createComments = (content, star, MovieId, UserId) => {
    return axios.post(`/api/comment`, { content, star, MovieId, UserId });
}