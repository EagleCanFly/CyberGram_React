import {
    sendWallPostCreator, setProfileData,
    updateWallPostCreator,
} from "../../redux/profilePageReducer";
import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
             userId = 11;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then(response => {
            this.props.setProfileData(response.data);
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {

    return {
        msgInfo: state.profilePage.msgInfo,
        updatedText: state.profilePage.updatedText,
        profile: state.profilePage.profile
    };

};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickCallback: (text) => {
            dispatch(sendWallPostCreator(text));
        },
        onChangeCallback: (text) => {
            dispatch(updateWallPostCreator(text));
        },
        setProfileData: (data) => {
            dispatch(setProfileData(data));
        },
    };
};

const ProfileAPIwithData = withRouter(ProfileAPI); // HOC withRouter добавляет новые свойства компоненту

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAPIwithData);
