import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// interceptors request to set auth
axiosAPI.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = {
                "Authorization": `Bearer ${token}`,
            }
        }
        return config;
    }
);



export default  axiosAPI