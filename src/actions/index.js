import { 
    FETCH_DATA,
    RESET_LIST 
} from './types';
import axios from 'axios';

export function fetchData(){
    const API_KEY = require('../config/keys').nasaAPI;
    const request = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`);

    return {
        type: FETCH_DATA,
        payload: request
    };
}

export function resetList(){
    return {
        type: RESET_LIST
    }
}