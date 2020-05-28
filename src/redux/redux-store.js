import { createStore, combineReducers } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./userPageReducer";



let redusers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    sidebar: sidebarPageReducer,
    usersPage: usersPageReducer
})

let store = createStore(redusers);

export default store;