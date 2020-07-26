import postdataReducer from "./postDataReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  postPage:  postdataReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer

});

let store = createStore(reducers)
export default store