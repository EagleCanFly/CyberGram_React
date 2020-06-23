import {
    getStatusText,
    sendWallPost, setProfile, setProfileData, setStatus, updateStatusText, updateWallPost
} from "../../redux/profilePageReducer";
import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    state = {
        status: this.props.status,
        statusEditMode: false
    }
    onStatusChange = (status) => {
        this.setState({
            status: status
        })

    }
    toggleEditMode = (value) => {
        if (value === false)  this.props.updateStatusText(this.state.status);
       this.setState({
           statusEditMode: value
       })

    }
    componentDidMount() {

        let userId = this.props.match.params.userId; // достаем данные о текущем пользователе
        if (!userId) {
            userId = 8624;
        }
        this.props.setProfile(userId, userId);
    }

    render() {
        return <Profile {...this.props}
                        localStatus={this.state.status}
                        onStatusChange={this.onStatusChange}
                        statusEditMode={this.state.statusEditMode}
                        value={this.state.value}
                        toggleEditMode={this.toggleEditMode}/>
    }
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
