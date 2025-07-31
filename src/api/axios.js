/*import axios from 'axios';

const API = axios.create({
    baseURL: 'https://legacybook.onrender.com/api',

});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default API;*/
// api/axios.js


/*import axios from "axios";

const API = axios.create({
    baseURL: "https://legacybook.onrender.com/api",
});

// ✅ Automatically attach token to each request
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;*/

// api/axios.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://legacybook.onrender.com/api',
});

// ✅ Add JWT token to all requests
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;