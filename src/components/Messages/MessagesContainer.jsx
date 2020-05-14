import React from "react";
import {addPostCreator, updateTextCreator} from '../../redux/messagesPageReducer'
import Messages from "./Messages";
import store from "./../../redux/redux-store";

const MessagesContainer = (props) => 
{
	let state = store.getState().messagesPage;

	let addMessage = (text) => {
		props.dispatch(addPostCreator(text));
	};
	let updateTextArea = (text) => {
		props.dispatch(updateTextCreator(text));
	};

	return <Messages updateTextArea={updateTextArea} addMessage={addMessage} state={state}/>
};

export default MessagesContainer;
