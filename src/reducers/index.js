import UsersReducer from './users';
import { combineReducers } from 'redux';

export default combineReducers({
    users: UsersReducer
})