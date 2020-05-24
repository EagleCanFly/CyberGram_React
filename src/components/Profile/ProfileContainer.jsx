import {
	sendWallPostCreator,
	updateWallPostCreator,
} from "../../redux/profilePageReducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	
	return {
		msgInfo: state.profilePage.msgInfo,
		updatedText: state.profilePage.updatedText,
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
	};
};
let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
