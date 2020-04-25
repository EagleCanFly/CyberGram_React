import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Messages.module.css";


const Dialog = (props) => {
	return (
		<NavLink to={"/messages/" + props.id} className={s.dialog}>
			{props.name}
		</NavLink>
	);
};

export default Dialog;