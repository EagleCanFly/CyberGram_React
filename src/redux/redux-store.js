import {createStore, combineReducers, applyMiddleware} from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./userPageReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let redusers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    sidebar: sidebarPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;