import {
    sendWallPost, setProfile, setProfileData, updateStatusText, updateWallPost
} from "../../redux/profilePageReducer";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const ProfileContainer = ({setProfile, userId, ...props}) => {

    const [statusEditMode, setStatusEditMode] = useState(false);
    const [status, setStatus] = useState('Enter your status');
    if (props.match.params.userId) {
        userId = props.match.params.userId;
    }
    useEffect(
        () => {
            setProfile(userId);
        }, [setProfile, userId]
    );

    const toggleEditMode = (value) => {
        setStatusEditMode(value);
        props.updateStatusText(status);
    }

    return <Profile {...props}
                    localStatus={status}
                    onStatusChange={setStatus}
                    statusEditMode={statusEditMode}
                    toggleEditMode={toggleEditMode}
                    userId={props.userId}
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
    connect(mapStateToProps, {sendWallPost, updateWallPost, setProfileData, setProfile, updateStatusText})
)(ProfileContainer);
