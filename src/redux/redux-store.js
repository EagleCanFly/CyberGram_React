import { createStore, combineReducers } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarPageReducer from "./sidebarPageReducer";



let redusers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    sidebar: sidebarPageReducer
})

let store = createStore(redusers);

export default store;