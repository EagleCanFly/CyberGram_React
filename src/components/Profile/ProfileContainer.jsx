import React from "react";
import { sendWallPostCreator, updateWallPostCreator } from "../../redux/profilePageReducer";
import Profile from "./Profile";
import store from "../../redux/redux-store";



const ProfileContainer = (props) => {
	let state = store.getState().profilePage.msgInfo;

	const onClickHandler = (text) => {
		props.dispatch(sendWallPostCreator(text));
	};
	const onChangeHandler = (text) => {
		props.dispatch(updateWallPostCreator(text));
	};

	return (
		<Profile onClickHandler={onClickHandler} onChangeHandler={onChangeHandler} state={state}/>
	);
};

export default ProfileContainer;
