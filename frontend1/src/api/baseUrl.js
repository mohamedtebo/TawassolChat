import axios from 'axios';
import { store } from '../store/store'

const baseUrl = axios.create({baseURL: 'https://tawassolchat.onrender.com'})
// const {token} = useSelector(state => state.auth);

baseUrl.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default baseUrl;
