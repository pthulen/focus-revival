import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { authReducer } from './authReducer';
import { landingReducer } from './landingReducer';

export default combineReducers({
    auth: authReducer,
    todos: todoReducer,
    landing: landingReducer
})