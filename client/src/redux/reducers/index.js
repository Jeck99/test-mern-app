import { combineReducers } from "redux";
import studentsReducers from "./studentsReducers";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
    movie: studentsReducers,
    auth: authReducer,
    error:errorReducer
})