import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post";
import { sendWallPostCreator, updateWallPostCreator } from "../../redux/profilePageReducer";

const Profile = (props) => {
	let wallPost = props.state.msgInfo.map((p) => {
		return <Post likes={p.likes} message={p.message} />;
	});
	const onClickHandler = (event) => {
		props.dispatch(sendWallPostCreator(props.state.updatedText));
	};
	const onChangeHandler = (event) => {
		props.dispatch(updateWallPostCreator(event.target.value));
	};

	return (
		<main className={s.main}>
			<img
				src="http://dermapes.pl/wp-content/uploads/2017/10/4k-retro-80s-wallpaper-fhd-1920x1080.jpg"
				alt="wall"
			/>
			<textarea
				onChange={onChangeHandler}
				placeholder="Enter your message"
				value={props.state.updatedText}
			></textarea>
			<button onClick={onClickHandler}>Add msg</button>
			<div>{wallPost}</div>
		</main>
	);
};

export default Profile;
