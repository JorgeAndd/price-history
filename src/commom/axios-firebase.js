import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://price-history.firebaseio.com/'
});

export default instance;