import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./userPageReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;