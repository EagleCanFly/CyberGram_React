import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import logo from "./../../images/logo.png"
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src={logo}
                alt="avatar"/>
            <div className={s.login}>
                {props.isAuth ? <span onDoubleClick={() => props.logout()}>{props.login}</span> : <NavLink to="/login">Login</NavLink>}

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
