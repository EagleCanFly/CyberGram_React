import React, {Suspense, useEffect} from "react";
import s from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import {Redirect, Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {init} from "./redux/appReducer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import ProfileContainer from "./components/Profile/ProfileContainer";

const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Messages = React.lazy(() => import('./components/Messages/Messages'));

const App = (props) => {

    useEffect(() => {
        props.init();

    }, [props.isInitialized])

    if (props.isInitialized === false) return <Redirect to={'/login'}/>

    return (
        <div className={s.app}>
            <Header/>
            <div className={'container'}>
                <div className={'row'}>
                    <Suspense fallback={<div className={'col-6 m-auto'}><Loader/></div>}>
                        <Nav/>
                        <div className="content-wrapper col-7">
                            <Route path="/login" render={() => <LoginContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/messages" render={() => <Messages/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {init})
)(App);
