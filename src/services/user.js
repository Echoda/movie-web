import axios from 'axios';

export const getUserList = (page, limit) => {
    return axios.get(`/api/user?page=${page}&limit=${limit}`)
}

export const deleteUser = (id) => {
    return axios.delete(`/api/user/${id}`)
}