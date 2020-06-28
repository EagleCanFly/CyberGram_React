import React from "react";
import s from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import Loader from "./components/common/Loader";
import {init} from "./redux/appReducer";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";

class App extends React.Component {
    componentDidMount() {
        this.props.init();
    }
    render() {

        if (!this.props.isInitialized) return <Loader/>

        return (
                <div className={s.app}>
                    <Header/>
                    <div className={'container'}>
                        <div className={'row'}>
                            <Nav/>
                            <div className="content-wrapper col-9">
                                <Route path="/login" render={() => <LoginContainer/>}/>
                                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                                <Route path="/messages" render={() => <Messages/>}/>
                                <Route path="/news" component={News}/>
                                <Route path="/music" component={Music}/>
                                <Route path="/settings" component={Settings}/>
                                <Route path="/users" render={() => <Users/>}/>
                            </div>
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
