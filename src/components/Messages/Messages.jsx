import React from "react";
import s from "./Messages.module.css";
import { NavLink } from "react-router-dom";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";

// const Dialog = (props) => {
// 	return (
// 		<NavLink to={"/messages/" + props.id} className={s.dialog}>
// 			{props.name}
// 		</NavLink>
// 	);
// };

// const Chat = (props) => {
// 	return <p>{props.text}</p>;
// };

const Messages = (props) => {
	
	let dialog = props.names.map((d) => {
		return <Dialog name={d.name} id={d.id} />;
	});

	let chat = props.chat.map((c) => {
		return <Chat text={c.text} />;
	});

	return (
		<div className={s.messagesWrapper}>
			<div className={s.dialogsColumn}>
				<h3 className={s.title}>Dialogs</h3>

				<div className={s.messages}>{dialog}</div>
			</div>
			<div className={s.chatingColumn}>
				<div className={s.chating}>{chat}</div>
			</div>
		</div>
	);
};

export default Messages;
