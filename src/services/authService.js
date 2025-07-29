import API from '../api/axios';

export const signup = async(email, password) => {
    const res = await API.post('/auth/signup', { email, password });
    return res.data;
};

export const login = async(email, password) => {
    const res = await API.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token); // Save JWT
    return res.data;
};