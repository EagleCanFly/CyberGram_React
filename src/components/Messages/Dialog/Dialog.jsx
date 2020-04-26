import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Messages.module.css";

const Dialog = (props) => {
	return (
		<NavLink to={"/messages/" + props.id} className={s.dialog}>
			<div className={s.dialog}>
				<img
					src="https://cdn.clipart.email/81a87910f7ac10490c427f6cfe0c1558_person-user-user-profile-avatar-data-computer-text-logo-_910-897.png"
					alt="avatar"
				/>
				{props.name}
			</div>
		</NavLink>
	);
};

export default Dialog;
