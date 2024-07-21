import axios from 'axios';

const BaseUrl = axios.create({baseURL: 'https://tawassolchat.onrender.com'});

export default BaseUrl;