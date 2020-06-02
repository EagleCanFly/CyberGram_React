import React from "react";
import s from "./Users.module.css";
import anonymous from "./../../images/anonymous.png";


const Users = (props) => {
    let pages = [];
    let totalPages = Math.ceil(props.state.totalCount / props.state.userPages); // получаем количество страниц пользователей

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (<div>
            {
                props.state.users.map(user => <div className={s.container} key={user.id}>
                        <div className={s.column}>
                            <img className={s.avatar} src={user.photos.small != null ? user.photos.small : anonymous}
                                 alt=""/>

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

                    </div>
                )}

            <div className={s.numbers}>Pages: {pages.map(page => <span
                className={page === props.state.currentPage ? s.currentPage : ''} onClick={() => {
                props.onPageChange(page);
            }}> {page} </span>)}</div>
        </div>
    )

}


export default Users;
