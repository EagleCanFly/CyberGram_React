import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";


const Nav = (props) => {

	let friends = props.state.friends.map((friend) => {
		return <Friend name={friend.name} avatar={friend.avatar} />
	})

	return (
		<nav className={s.nav}>
			<ul className={s.menu}>
				<li>
					<NavLink to="/profile" activeClassName={s.active}>
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink to="/messages" activeClassName={s.active}>
						Messages
					</NavLink>
				</li>
				<li>
					<NavLink to="/news" activeClassName={s.active}>
						News
					</NavLink>
				</li>
				<li>
					<NavLink to="/music" activeClassName={s.active}>
						Music
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" activeClassName={s.active}>
						Settings
					</NavLink>
				</li>
			</ul>

			<div className={s.friends}>
				<hr/>
				<p className={s.lable}>Friends</p>
				{friends}
			</div>
		</nav>
	);
};

export default Nav;
