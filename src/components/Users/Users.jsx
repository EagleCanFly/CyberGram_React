import React from "react";
import s from "./Users.module.css";

const Users = (props) => {

    return (
        props.state.users.map(user => {

            return (
                <div className={s.container}>
                    <div className={s.column}>
                        <img className={s.avatar} src={user.avatarSrc} alt=""/>

                        {user.isFollowed ? <button onClick={() => {props.follow(user.id)}}>Unfollow</button> :
                            <button onClick={() => {props.unfollow(user.id)}}>Follow</button>}
                    </div>
                    <div className={s.column}>
                        <div className={s.item}>Name:<span> {user.name}</span></div>
                        <div className={s.item}>Last Name:<span> {user.lastName}</span></div>
                        <div className={s.item}>Status: <span> {user.status}</span></div>
                        <div className={s.item}>Country: <span> {user.country}</span></div>
                        <div className={s.item}>City: <span> {user.city}</span></div>
                    </div>

                </div>)
        }))
}

export default Users;
