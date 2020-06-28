import React from "react";
import "./Nav.scss";
import {NavLink} from "react-router-dom";

const Nav = (props) => {

    return (
        <nav  className='col-2' key={props.id}>
            <ul className={'nav flex-column'}>
                <li className={'nav-item'}>
                    <NavLink to="/profile" className={'nav-link vk'}  activeClassName={'active'}>
                        Profile
                    </NavLink>
                </li>
                <li className={'nav-item'}>
                    <NavLink to="/users" className={'nav-link vk'} activeClassName={'active'}>
                        Users
                    </NavLink>
                </li>

                <li className={'nav-item'}>
                    <NavLink to="/messages" className={'nav-link vk'} activeClassName={'active'}>
                        Messages
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
