import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
	return (
		<div className={s.post} key={props.id}>
			<div className={s.avatar}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png"
					alt=""
					srcset=""
				/>
				<div className={s.likes}>Likes {props.likes}</div>
			</div>
			<p className={s.message}>{props.message}</p>
		</div>
	);
};

export default Post;
