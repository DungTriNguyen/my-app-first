import axios from 'axios'
import {ENV} from '@/configs/env'



const axiosApiClient = axios.create({
    baseURL: ENV.API_URL,
    timeout: 10000,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${ENV.MOVIE_API_KEY}`
    },
})
export const get = async ( path: string,options = {}) => {
    const response = await axiosApiClient.get(path, options);
    return response.data;
}
export const post = async ( path: string,options = {}) => {
    const response = await axiosApiClient.post(path, options);
    return response.data;
}
export const put = async ( path: string,options = {}) => {
    const response = await axiosApiClient.put(path, options);
    return response.data;
}
export const deleted = async ( path: string,options = {} ) => {
    const response = await axiosApiClient.delete(path, options);
    return response.data;
}

export default axiosApiClient;

