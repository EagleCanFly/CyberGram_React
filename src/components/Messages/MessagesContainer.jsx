import {
	addPostCreator,
	updateTextCreator,
} from "../../redux/messagesPageReducer";
import Messages from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		state: state.messagesPage,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateTextArea: (text) => {
			dispatch(updateTextCreator(text));
		},
		addMessage: (text) => {
			dispatch(addPostCreator(text));
		},
	};
};
let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;
