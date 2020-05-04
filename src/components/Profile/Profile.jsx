import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post";
const Profile = (props) => {
	let wallPost = props.state.msgInfo.map((p) => {
		return <Post likes={p.likes} message={p.message} />;
	});
	return (
		<main className={s.main}>
			<img
				src="http://dermapes.pl/wp-content/uploads/2017/10/4k-retro-80s-wallpaper-fhd-1920x1080.jpg"
				alt=""
			/>
			{/* <Post likes="0" message="Hey dude" />
			<Post likes="5" message="How's it going?" />
			<Post likes="11" message="Not too bad" /> */}
			<div>{wallPost}</div>
		</main>
	);
};

export default Profile;
