import axios from 'axios';

export const adminLogin = (name, pwd) => {
    return axios.post('api/admin/login', {name, pwd});
}

export const userLogin = (name, pwd) => {
    return axios.post('api/user/login', {name, pwd});
}