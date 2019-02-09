import { FETCH_DATA, RESET_LIST } from '../actions/types';

export default function (state = [], action){
    switch(action.type){
        case FETCH_DATA:
            return [ ...state, ...action.payload.data ];
        case RESET_LIST:
            return [];
        default:
            return state;
    }
}