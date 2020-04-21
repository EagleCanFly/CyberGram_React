import React from "react";
import s from "./Messages.module.css";
import { NavLink } from "react-router-dom";
const Messages = () => {
	return (
		<div className={s.messagesWrapper}>
			<div className={s.dialogsColumn}>
				<h3 className={s.title}>Dialogs</h3>
				<div className={s.messages}>
					<NavLink to="/messages/vitalik" className={s.dialog}>
						Vitalik
					</NavLink>
					<NavLink to="/messages/kristina" className={s.dialog}>
						Kristina
					</NavLink>
					<NavLink to="/messages/dmitriy" className={s.dialog}>
						Dmitriy
					</NavLink>
					<NavLink to="/messages/Yulya" className={s.dialog}>
						Yulya
					</NavLink>
				</div>
			</div>
			<div className={s.chatingColumn}>
				<div className={s.chating}>
					<p>Привет</p>
					<p>Kak dela?</p>
				</div>
			</div>
		</div>
	);
};

export default Messages;
