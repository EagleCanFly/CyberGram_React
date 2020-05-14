import React from "react";
import {addPostCreator, updateTextCreator} from '../../redux/messagesPageReducer'
import Messages from "./Messages";

const MessagesContainer = (props) => 
{
	let state = props.store.getState().messagesPage;

	let addMessage = (text) => {
		props.store.dispatch(addPostCreator(text));
	};
	let updateTextArea = (text) => {
		props.store.dispatch(updateTextCreator(text));
	};

	return <Messages updateTextArea={updateTextArea} addMessage={addMessage} state={state}/>
};

export default MessagesContainer;
