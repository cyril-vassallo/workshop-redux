import { combineReducers } from "redux";
import { mathReducer } from "./mathReducer";
import { userReducer } from "./userReducer";


const reducers = combineReducers({
    mathReducer,
    userReducer
})

export default reducers;