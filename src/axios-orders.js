import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5639f.firebaseio.com/'
});

export default instance;