import {
    sendWallPost, setProfile, setProfileData, updateWallPost
} from "../../redux/profilePageReducer";
import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; // достаем данные о текущем пользователе
        if (!userId) {
            userId = 11;
        }

        this.props.setProfile(userId);
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


const ProfileAPIwithData = withRouter(ProfileAPI); // HOC withRouter добавляет новые свойства компоненту. В данном случае
// нужен ID текущего пользователя из URL

export default connect(mapStateToProps, {sendWallPost, updateWallPost, setProfileData, setProfile})(ProfileAPIwithData);
