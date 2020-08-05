import postdataReducer from "./postDataReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
  postPage:  postdataReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer

});

let store = createStore(reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
export default store