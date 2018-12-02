import { combineReducers } from 'redux';
import DataReducer from './data';

const rootReducer = combineReducers({
    astronomy: DataReducer
})

export default rootReducer;