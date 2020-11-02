import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import voteReducer from "./voteReducer";
import adminReducer from "./adminReducer";



export default combineReducers({authReducer,voteReducer,adminReducer});