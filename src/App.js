import React from "react";
import s from "./App.module.css";
import Nav from "./components/Nav/Nav";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import store from "./redux/redux-store"; // удалить и сделать контейнерный компонент для Nav
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <div className={s.app_wrapper}>
                    <HeaderContainer/>
                    <Nav state={store.getState().sidebar}/>
                    <div className="content-wrapper">
                        <Route path="/login" render={() => <LoginContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messages" render={() => <MessagesContainer/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
