import React from "react";
import s from "./Post.module.css";
import anonymous from "../../../../images/unknown-user.jpg"
const Post = (props) => {
	return (
		<div className={s.post} key={props.id}>
			<div className={s.avatar}>
				<img
					src={props.avatar ? props.avatar : anonymous}
					alt="avatar"
				/>
				<div className={s.likes}>Likes {props.likes}</div>
				<span className={s.cross} onClick={() => props.deleteMessage(props.id)}>X</span>
			</div>
			<p className={s.message}>{props.message}</p>
		</div>
	);
};

export default Post;
