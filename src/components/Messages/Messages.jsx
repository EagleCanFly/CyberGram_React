import React from "react";
import s from "./Messages.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";


const Messages = (props) => {

	let dialog = props.state.dialogData.map((d) => {
		return <Dialog name={d.name} id={d.id} />;
	});

	let chat = props.state.chatData.map((c) => {
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
