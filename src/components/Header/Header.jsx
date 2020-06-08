import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src="https://www.freelogodesign.org/file/app/client/thumb/50ad7671-ff34-470b-9e50-e0435539e322_200x200.png?1586813404518"
                alt="avatar"></img>
            <div className={s.login}>
                {props.resultCode === 0 ? props.login : <NavLink to="/login">Login</NavLink>}

            </div>
        </header>
    );
};
export default Header;
