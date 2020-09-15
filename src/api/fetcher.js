import axios from 'axios';
const fetcher = axios.create({
    baseURL: 'https://10.0.0.18',
    withCredentials: true
});

export default fetcher;