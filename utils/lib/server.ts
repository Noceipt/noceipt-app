import axios from 'axios';

export const server = axios.create({
    baseURL: 'http://157.230.228.77/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});