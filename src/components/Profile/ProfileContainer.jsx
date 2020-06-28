import {
    sendWallPost, setProfile, setProfileData, updateStatusText, updateWallPost
} from "../../redux/profilePageReducer";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const ProfileContainer = (props) => {

    const [statusEditMode, setStatusEditMode] = useState(false);
    const [status, setStatus] = useState('Enter your status');

    useEffect(() => {
        let userId = props.match.params.userId; // достаем данные о текущем пользователе
        if (!userId) {
            userId = 8624;
        }
        props.setProfile(userId, userId);
    },[])

    const toggleEditMode = (value) => {
        setStatusEditMode(value);
        props.updateStatusText(status);
    }

    return <Profile {...props}
                        localStatus={status}
                        onStatusChange={setStatus}
                        statusEditMode={statusEditMode}
                        toggleEditMode={toggleEditMode}
    />

}

const mapStateToProps = (state) => {
    return {
        msgInfo: state.profilePage.msgInfo,
        updatedText: state.profilePage.updatedText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };

};


export default compose(
     withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {sendWallPost, updateWallPost, setProfileData, setProfile, updateStatusText})
)(ProfileContainer);
