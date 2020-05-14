import React from "react";
import { sendWallPostCreator, updateWallPostCreator } from "../../redux/profilePageReducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
	let state = props.store.getState().profilePage.msgInfo;

	const onClickHandler = (text) => {
		props.store.dispatch(sendWallPostCreator(text));
	};
	const onChangeHandler = (text) => {
		props.store.dispatch(updateWallPostCreator(text));
	};

	return (
		<Profile onClickHandler={onClickHandler} onChangeHandler={onChangeHandler} state={state}/>
	);
};

export default ProfileContainer;
