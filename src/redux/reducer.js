import { combineReducers } from "redux";
import math from './firstReducer/reducer';
import userInf from './firstReducer/reducer'

export default combineReducers({
    math,
    userInf
})