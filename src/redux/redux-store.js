import { createStore, combineReducers } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./userPageReducer";
import authReducer from "./authReducer";



let redusers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    sidebar: sidebarPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(redusers);

export default store;