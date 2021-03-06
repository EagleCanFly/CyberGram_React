import {
    changePhoto,
    deleteWallPost,
    sendWallPost, setProfile, togglePhotoEditMode, updateProfileInfo, updateStatusText
} from "../../redux/profilePageReducer";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Loader from "../Loader/Loader";

const ProfileContainer = ({setProfile, userId, ...props}) => {

    let [statusEditMode, setStatusEditMode] = useState(false);
    let [statusFormEditMode, setFormStatusEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    let [message, setMessage] = useState('');

    useEffect(
        () => {
          setProfile(userId);
        }, [setProfile, userId, props.match.params.userId]
    );

    const onSubmit = (parameters) => {

        if (parameters.message === '') return;
        props.sendWallPost(parameters.message);
        setMessage('');
    }
    const onFormSubmit = async (parameters) => {

        await props.updateProfileInfo(parameters);
        setFormStatusEditMode(false);
    }
    const onPhotoChosen = (event) => {
        props.changePhoto(event.target.files[0]);
    }
    const onToggleSendPhotoMode = (value) => {
        props.togglePhotoEditMode(value);
    }
    const toggleEditMode = (value) => {
        setStatusEditMode(value);
        props.updateStatusText(status);
    }
    const toggleFormEditMode = (value) => {
        setFormStatusEditMode(value);
    }
    const onChangeHandler = (event) => {
        setMessage(event.target.value);
    };

    if (props.match.params.userId) {
        userId = props.match.params.userId;
    }

    if (!props.profile) return <Loader/>;

    return <Profile {...props}
                    localStatus={status}
                    onStatusChange={setStatus}
                    statusEditMode={statusEditMode}
                    statusFormEditMode={statusFormEditMode}
                    toggleEditMode={toggleEditMode}
                    toggleFormEditMode={toggleFormEditMode}
                    userId={userId}
                    onChangeHandler={onChangeHandler}
                    onPhotoChosen={onPhotoChosen}
                    onToggleSendPhotoMode={onToggleSendPhotoMode}
                    onSubmit={onSubmit}
                    onFormSubmit={onFormSubmit}
                    deleteMessage={props.deleteWallPost}
                    message={message}

    />
}

const mapStateToProps = (state) => {
    return {
        msgInfo: state.profilePage.msgInfo,
        updatedText: state.profilePage.updatedText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.data.id,
        isSendPhotoModeActive: state.profilePage.isSendPhotoModeActive,
        isProfileEditModeActive: state.profilePage.isProfileEditModeActive
    };

};
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {sendWallPost, deleteWallPost, setProfile, updateStatusText, updateProfileInfo, changePhoto, togglePhotoEditMode})
)(ProfileContainer);
