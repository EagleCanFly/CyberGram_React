import React from "react";
import s from "./App.module.css";
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import Loader from "./components/common/Loader";
import {init} from "./redux/appReducer";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";

class App extends React.Component {
    componentDidMount() {
        this.props.init();
    }
    render() {
        debugger
        if (!this.props.isInitialized) return <Loader/>

        return (
                <div className={s.app}>
                    <div className={s.app_wrapper}>
                        <Header/>
                        <Nav/>
                        <div className="content-wrapper">
                            <Route path="/login" render={() => <LoginContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/messages" render={() => <Messages/>}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        </div>
                    </div>
                </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{init})
    )(App);
