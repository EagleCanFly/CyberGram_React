import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post";
import { sendWallPostCreator, updateWallPostCreator } from "../../redux/profilePageReducer";

const Profile = (props) => {
	let wallPost = props.state.map((p) => {
		return <Post likes={p.likes} message={p.message} />;
	});
	let textArea = React.createRef();

	const onClickHandler = () => {
		props.onClickHandler(textArea.current.value);
	};
	const onChangeHandler = (event) => {
		props.onChangeHandler(event.target.value);
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
				ref={textArea}
			></textarea>
			<button onClick={onClickHandler}>Add msg</button>
			<div>{wallPost}</div>
		</main>
	);
};

export default Profile;
