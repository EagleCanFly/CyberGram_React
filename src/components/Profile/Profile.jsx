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
                    {props.isSendPhotoModeActive
                        ? <input className={'form-control-file pt-4'}
                                 name={'file'}
                                 type="file"
                                 onChange={(event) => {
                            props.onPhotoChosen(event);
                            props.onToggleSendPhotoMode(false);
                        }}/>

                        : <button onClick={() => props.onToggleSendPhotoMode(true)} type="button"
                                  disabled={props.profile.userId !== props.userId}
                                  className="btn btn-outline-secondary my-2">Change photo
                        </button>}

                </div>
                {props.statusEditMode
                    ? <input className={s.statusInput}
                             autoFocus={true}
                             type="text"
                             onBlur={() => props.toggleEditMode(false)}
                             onKeyUp={(event => {
                                 if (event.keyCode === 13) {
                                     props.toggleEditMode(false);
                                 }
                             })}
                             value={props.localStatus}
                             onChange={(event) => props.onStatusChange(event.currentTarget.value)}/>

                    : <span className={'mb-4'}><span
                        className={s.label}>Status:</span> {props.status || 'Enter your status'}

                        {props.profile.userId === props.userId &&
                        <button className={'btn btn-outline-secondary btn-sm ml-2'}
                                onClick={() => props.toggleEditMode(true)}>Change status</button>}
                </span>
                }
                {props.statusFormEditMode
                    ? <Form onSubmit={props.onFormSubmit}
                            initialValues={props.profile}
                            render={({handleSubmit}) => (
                                 <form onSubmit={handleSubmit}>
                                    <div className={'d-flex flex-column '}>
                                        <Field name='fullName'>
                                            {({input}) => (
                                                <div className={'d-flex justify-content-between'}>
                                                    <span className={s.label}>Nickname:</span>
                                                    <input className="form-control w-50" {...input} name='fullName' type="text"/>
                                                </div>
                                            )}
                                        </Field><br/>

                                        <Field name={'aboutMe'}>
                                            {({input}) => (
                                                <div className={'d-flex justify-content-between'}>
                                                    <span className={s.label}>aboutMe:</span>
                                                    <input className="form-control w-50" {...input} name={'aboutMe'} type="text"/>
                                                </div>
                                            )}
                                        </Field><br/>
                                        <Field name={'lookingForAJob'} type={'checkbox'}>
                                            {({input}) => (
                                                <div className={'d-flex justify-content-between form-check form-check-inline'}>
                                                    <span className={s.label}>lookingForAJob:</span>
                                                    <input className="form-check-input" {...input} name={'lookingForAJob'} type="checkbox"/>
                                                </div>
                                            )}
                                        </Field><br/>
                                        <Field name={'lookingForAJobDescription'} type={'input'}>
                                            {({input}) => (
                                                <div className={'d-flex justify-content-between'}>
                                                    <span className={s.label}>What kind of job:</span>
                                                    <input className="form-control w-50" {...input} name={'lookingForAJobDescription'} type="text"/>
                                                </div>
                                            )}
                                        </Field><br/>
                                        <span>
                                        <div className={s.label}>Contacts</div> {Object.keys(props.profile.contacts).map((key,index) => (
                                            <Field key={index} name={`contacts.${key}`} className={'pl-3 pt-2 form-control w-50'}>
                                                {({input}) => (
                                                    <div className={'d-flex justify-content-between my-1 ml-3 form-group'}>
                                                        <span className={s.label}>{key}:</span>
                                                        <input className="form-control w-50" {...input} name={key} type="url"/>
                                                    </div>
                                                )}
                                            </Field>))}</span>
                                    </div>
                                    <button className={'btn btn-outline-secondary'}>Confirm</button>
                                </form>
                            )}
                    />
                    : <div className={'d-flex flex-column'}>
                        <span><span className={s.label}>Nickname:</span> {props.profile.fullName}</span><br/>

                        <span><span className={s.label}>About me:</span> {props.profile.aboutMe}</span><br/>
                        <span><span className={s.label}>Looking for a job:</span> {props.profile.lookingForAJob ? "Yes" : "No"}</span><br/>
                        <span><span className={s.label}>What kind of job:</span> {props.profile.lookingForAJobDescription}</span><br/>
                        <span><span className={s.label}>Contacts</span> {Object.keys(props.profile.contacts).map((key,i) => (
                            <div key={i} className={'pl-3 pt-2'}><b>{key}:</b> <a href={props.profile.contacts[key]}
                                                                                  target='_blank'
                                                                                  rel="noopener noreferrer">{props.profile.contacts[key]}</a></div>))}</span>
                        <button className={'btn btn-outline-secondary'}
                                disabled={props.profile.userId !== props.userId}
                                onClick={() => props.toggleFormEditMode(true)}>Change profile info</button>
                    </div>}

            </div>

            <Form onSubmit={props.onSubmit}
                  render={({handleSubmit, form}) => (
                      <form className={'form-inline w-50 my-3'}
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
