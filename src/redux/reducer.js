import { combineReducers } from "redux";
import login from './firstReducer/reducer';

export default combineReducers({
    login: login,
})