import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { authReducer } from './authReducer';
import { landingReducer } from './landingReducer';
import { quoteReducer } from './quoteReducer';

export default combineReducers({
    auth: authReducer,
    todos: todoReducer,
    landing: landingReducer,
    quote: quoteReducer
})