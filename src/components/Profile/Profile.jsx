import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post";
import Loader from "../common/Loader";
import anonymous from "../../images/anonymous.png"

const Profile = (props) => {


    let wallPost = props.msgInfo.map((p) => {
        return <Post likes={p.likes} message={p.message}/>;
    });
    let textArea = React.createRef();

    const onClickHandler = () => {
        props.sendWallPost(textArea.current.value);
    };
    const onChangeHandler = (event) => {
        props.updateWallPost(event.target.value);
    };
    if (!props.profile) {
        return <Loader/>
    }

    return (
        <main className={s.main}>
            <div className={s.profile}>
                <div className={s.avatar}><img src={props.profile.photos.large ? props.profile.photos.large : anonymous} alt="avatar"/></div>
                { props.statusEditMode
                    ? <input className={s.statusInput}
                             autoFocus={true}
                             type="text"
                             onBlur={() => props.toggleEditMode(false)}
                             value={props.localStatus}
                             onChange={(event) => props.onStatusChange(event.currentTarget.value)}/>
                    : <span className={s.status}
                           onDoubleClick={() => props.toggleEditMode(true)} >Status: {props.status || 'Enter your status'}</span>}
                <div>Nickname: {props.profile.aboutMe}</div>
                <div>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</div>
            </div>
            <textarea
                onChange={onChangeHandler}
                placeholder="Enter your message"
                value={props.updatedText}
                ref={textArea}
            >1</textarea>
            <br/>
            <button onClick={onClickHandler}>Add msg</button>
            <div className={s.wall_post}>{wallPost}</div>
        </main>
    );
};

export default Profile;
