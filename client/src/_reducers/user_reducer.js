import {
    LOGIN_USER, 
    JOIN_USER,
    AUTH_USER,
    // MEMO_USER
} from '../_actions/types'


export default function (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }
            // break;
        case JOIN_USER:
            return{...state, success: action.payload }
            // break;
        case AUTH_USER:
            return{...state, userData: action.payload }
            // break;
        // case MEMO_USER:
        //         return{...state, success: action.payload}
        //         // break;
        default:
            return state;
    }
}

