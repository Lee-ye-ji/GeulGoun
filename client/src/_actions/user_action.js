
import axios from 'axios';

import {
    LOGIN_USER,
    JOIN_USER,
    AUTH_USER
} from './types';

export function loginUser(dataTosubmit){

    const request = axios.post('/api/users/login', dataTosubmit)
    // console.log(dataTosubmit)
    .then(response =>  response.data )

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function joinUser(dataTosubmit){

    const request = axios.post('/api/users/join', dataTosubmit)
    .then(response => response.data)  
    // console.log(dataTosubmit)
    // .catch(err => console.log(err))
    

    return {
        type: JOIN_USER,
        payload: request
        
    }
}

export function auth(){

    const request = axios.get('/api/users/auth')
    .then(response => response.data)  
    // .catch(err => console.log(err))
    

    return {
        type: AUTH_USER,
        payload: request
        
    }
}

