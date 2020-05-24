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

	let textContent = React.createRef();

	let addMessage = () => {
		props.addMessage(textContent.current.value)
	};
	let updateTextArea = () => {
		props.updateTextArea(textContent.current.value);
	};

	return (
		<div>
			<div className={s.messagesWrapper}>
				<div className={s.dialogsColumn}>
					<h3 className={s.title}>Dialogs</h3>

					<div className={s.messages}>{dialog}</div>
				</div>
				<div className={s.chatingColumn}>
					<div className={s.chating}>{chat}</div>
				</div>
			</div>
			<textarea
				onChange={updateTextArea}
				ref={textContent}
				cols="20"
				rows="5"
				value={props.state.updateText}
			></textarea>
			<button onClick={addMessage}>addMessage</button>
		</div>
	);
};

export default Messages;
