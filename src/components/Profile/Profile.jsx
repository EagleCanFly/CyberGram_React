import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post";
import Loader from "../common/Loader";
import anonymous from "../../images/unknown-user.jpg"

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
                <div className={s.avatar}><img src={props.profile.photos.large ? props.profile.photos.large : anonymous}
                                               alt="avatar"/></div>
                {props.statusEditMode
                    ? <input className={s.statusInput}
                             autoFocus={true}
                             type="text"
                             onBlur={() => props.toggleEditMode(false)}
                             value={props.localStatus}
                             onChange={(event) => props.onStatusChange(event.currentTarget.value)}/>

                    : <span className={s.status}><span
                        className={s.label}>Status:</span> {props.status || 'Enter your status'}
                        <button disabled={props.profile.userId != props.userId} className={'btn btn-outline-secondary btn-sm ml-2'}
                                onClick={() => props.toggleEditMode(true)}>Change status</button></span>}

                <span><span className={s.label}>Nickname:</span> {props.profile.fullName}</span>
                <span><span className={s.label}>Looking for a job:</span> {props.profile.lookingForAJob ? "Yes" : "No"}</span>
            </div>
            <div className="input-group mb-3 w-50">

                <input type="text"
                       className="form-control w-25"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       onChange={onChangeHandler}
                       placeholder="Enter your message"
                       value={props.updatedText}
                       ref={textArea}
                />
                <button className={'btn btn-outline-secondary'} onClick={onClickHandler}>Send</button>
            </div>

            <br/>
            {/*<button >Add msg</button>*/}
            <div className={s.wall_post}>{wallPost}</div>
        </main>
    );
};

export default Profile;
