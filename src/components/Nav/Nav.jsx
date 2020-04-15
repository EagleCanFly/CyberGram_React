import React from "react";
import NavClasses from "./Nav.module.css";
const Nav = () => {
	return (
		<nav className={NavClasses.nav}>
			<ul className={NavClasses.menu}>
				<li>
					<a href="">Profile</a>
				</li>
				<li>
					<a href="">Messages</a>
				</li>
				<li>
					<a href="">News</a>
				</li>
				<li>
					<a href="">Music</a>
				</li>
				<li>
					<a href="">Settings</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
