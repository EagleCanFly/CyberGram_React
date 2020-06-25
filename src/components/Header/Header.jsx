import React from "react";
import s from "./Header.module.css"
import {NavLink, Redirect} from "react-router-dom";
import logo from "./../../images/logo.png"
const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src={logo}
                alt="avatar"></img>
            <div className={s.login}>
                {props.isAuth ? <span onDoubleClick={() => props.logout()}>{props.login}</span> : <NavLink to="/login">Login</NavLink>}

            </div>
        </header>
    );
};
export default Header;
