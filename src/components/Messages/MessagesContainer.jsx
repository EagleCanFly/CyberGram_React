import {
    addPostCreator,
    updateTextCreator,
} from "../../redux/messagesPageReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Messages from "./Messages";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class MessagesContainer extends React.Component {
    render() {
        return <Messages state={this.props.state}/>
    }
}

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(MessagesContainer);
