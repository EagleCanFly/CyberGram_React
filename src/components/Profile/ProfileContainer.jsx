import {
    sendWallPost, setProfile, setProfileData, updateStatusText
} from "../../redux/profilePageReducer";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Loader from "../Loader/Loader";

const ProfileContainer = ({setProfile, userId, ...props}) => {

    const [statusEditMode, setStatusEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [message, setMessage] = useState('');

    useEffect(
        () => {
            setProfile(userId);
        }, [setProfile, userId]
    );

    const toggleEditMode = (value) => {
        setStatusEditMode(value);
        props.updateStatusText(status);
    }
    const onChangeHandler = (event) => {
        setMessage(event.target.value);
    };
    const onClickHandler = () => {
        if (message === '') return;
        props.sendWallPost(message);
    };

    if (props.match.params.userId) {
        userId = props.match.params.userId;
    }

    if (!props.profile) return <Loader/>;

    return <Profile {...props}
                    localStatus={status}
                    onStatusChange={setStatus}
                    statusEditMode={statusEditMode}
                    toggleEditMode={toggleEditMode}
                    userId={userId}
                    onChangeHandler={onChangeHandler}
                    onClickHandler={onClickHandler}
                    message={message}

    />
}

const mapStateToProps = (state) => {
    return {
        msgInfo: state.profilePage.msgInfo,
        updatedText: state.profilePage.updatedText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.data.id
    };

};
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {sendWallPost, setProfile, updateStatusText})
)(ProfileContainer);
