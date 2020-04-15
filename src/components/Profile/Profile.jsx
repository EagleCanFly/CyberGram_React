import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post"
const Profile = () => {
	return (
		<main className={s.main}>
			<img src="http://dermapes.pl/wp-content/uploads/2017/10/4k-retro-80s-wallpaper-fhd-1920x1080.jpg" alt=""/>
				<Post />
				<Post />
				<Post />
		</main>
	);
};

export default Profile;
