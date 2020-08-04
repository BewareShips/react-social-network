import postdataReducer from "./postDataReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  postPage:  postdataReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer

});

let store = createStore(reducers,applyMiddleware(thunkMiddleware))
export default store