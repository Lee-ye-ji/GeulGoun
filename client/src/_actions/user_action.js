
import axios from 'axios';

import {
    LOGIN_USER,
    JOIN_USER,
    AUTH_USER
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function loginUser(dataTosubmit){

    const request = axios.post(`${USER_SERVER}/login`, dataTosubmit)
    // console.log(dataTosubmit)
    .then(response =>  response.data )

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function joinUser(dataTosubmit){

    const request = axios.post(`${USER_SERVER}/join`, dataTosubmit)
    .then(response => response.data)  
    // console.log(dataTosubmit)
    // .catch(err => console.log(err))
    

    return {
        type: JOIN_USER,
        payload: request
        
    }
}

export function auth(){

    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data)  
    // .catch(err => console.log(err))
    

    return {
        type: AUTH_USER,
        payload: request
        
    }
}

