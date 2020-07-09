import React from "react";
import s from "./Profile.module.css";
import Post from "./Posts/Post/Post";
import anonymous from "../../images/unknown-user.jpg"
import {Field, Form} from "react-final-form";

const Profile = (props) => {
    let wallPost = props.msgInfo.map((post, id) => {
        return <Post likes={post.likes}
                     message={post.message}
                     id={id}
                     deleteMessage={props.deleteMessage}
                     avatar={props.profile.photos.large}/>;
    });

    return (
        <main className={s.main}>
            <div className={s.profile}>
                <div className={s.avatar}><img src={props.profile.photos.large ? props.profile.photos.large : anonymous}
                                               alt="avatar"/></div>
                <div className={'form-group'}>
                    { props.isSendPhotoModeActive
                        ? <input className={'form-control-file pt-4'} name={'file'} type="file" onChange={(event) => {
                            props.onPhotoChosen(event);
                            props.onToggleSendPhotoMode(false);
                        }}/>

                        : <button onClick={() => props.onToggleSendPhotoMode(true)} type="button" disabled={props.profile.userId !== props.userId}
                                  className="btn btn-outline-secondary my-2">Change photo
                        </button> }

                </div>
                {props.statusEditMode
                    ? <input className={s.statusInput}
                             autoFocus={true}
                             type="text"
                             onBlur={() => props.toggleEditMode(false)}
                             value={props.localStatus}
                             onChange={(event) => props.onStatusChange(event.currentTarget.value)}/>

                    : <span className={s.status}><span
                        className={s.label}>Status:</span> {props.status || 'Enter your status'}

                        {props.profile.userId === props.userId &&
                        <button className={'btn btn-outline-secondary btn-sm ml-2'}
                                onClick={() => props.toggleEditMode(true)}>Change status</button>}
                </span>
                }

                <span><span className={s.label}>Nickname:</span> {props.profile.fullName}</span>
                {props.profile.aboutMe &&
                <span><span className={s.label}>About me:</span> {props.profile.aboutMe}</span>}
                <span><span className={s.label}>Looking for a job:</span> {props.profile.lookingForAJob ? "Yes" : "No"}</span>
                <span><span className={s.label}>Contacts</span> {Object.keys(props.profile.contacts).map(key => (
                    <div className={'pl-3 pt-2'}><b>{key}:</b> {props.profile.contacts[key]}</div>))}</span>
            </div>

            <Form onSubmit={props.onSubmit}
                  render={({handleSubmit, form}) => (
                      <form className={'form-inline w-50 m-3'}
                            onSubmit={(event) => {
                                handleSubmit(event);
                                form.reset();
                            }}>
                          <div>
                              <Field name="message">
                                  {({input}) => (
                                      <div className={'form-group'}>
                                          <label htmlFor='message' className="sr-only">Message</label>
                                          <input type="text"
                                                 name={'message'}
                                                 className="form-control"
                                                 placeholder="Enter your message"
                                                 {...input}/>
                                          <button className={'btn btn-outline-secondary'}>Send</button>
                                      </div>

                                  )}
                              </Field>
                          </div>
                      </form>
                  )}>
            </Form>


            <br/>
            <div className={s.wall_post}>{wallPost}</div>
        </main>
    );
};

export default Profile;
