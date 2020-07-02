import React from "react";
import  "./Header.scss"
import {NavLink} from "react-router-dom";
import logo from "./../../images/logo.png"
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = (props) => {
    return (
        <header className={'header'}>
            <img
                src={logo}
                alt="avatar"/>
            <div className={'login'}>
                {props.isAuth ?
                    <span>{props.login} <button className={'btn btn-outline-light btn-sm ml-1'} onClick={() => props.logout()}>Sign out</button></span> :
                    <NavLink to="/login"><button className={'btn btn-outline-light btn-sm'}>Sign in</button></NavLink>}
            </div>
        </header>
    );
};
const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        resultCode: state.auth.resultCode,
        isAuth: state.auth.isAuth
    }
};
export default connect(mapStateToProps, {logout})(Header);
