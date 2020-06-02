import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";

const Users1 = (props) => {

    if (props.state.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        props.state.users.map(user => {
            return (
                <div className={s.container}>
                    <div className={s.column}>
                        <img className={s.avatar} src={user.photos.small} alt=""/>

                        {user.isFollowed ? <button onClick={() => {
                                props.follow(user.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Follow</button>}
                    </div>
                    <div className={s.column}>
                        <div className={s.item}>Name:<span> {user.name}</span></div>
                        <div className={s.item}>Nickame:<span> {user.uniqueUrlName}</span></div>
                    </div>

                </div>)
        }))
}

export default Users1;
