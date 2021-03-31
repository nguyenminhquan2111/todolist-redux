import { combineReducers } from "redux";
import taskReducer from "./todolist-reducer";

const rootReducer = combineReducers({
  //key:value
  taskReducer,
});

export default rootReducer;
