import axios from 'axios';

export default function fetchData(){
    const API_KEY = require('../config/keys').nasaAPI;
    const request = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

    return {
        type: 'FETCH_DATA',
        payload: request
    }
}