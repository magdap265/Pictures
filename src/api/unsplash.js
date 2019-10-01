import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID b2d8864277255560c8e8ef7e1ca80b2664117fbf4a7f5f1032d646f684c3f4be'
    }
});