import React from "react";
import s from "./Users.module.css";
import anonymous from "./../../images/anonymous.png";
import {NavLink} from "react-router-dom";
import Pagination from "react-js-pagination";


const Users = (props) => {

    return (<div>
            {
                props.state.users.map(user => <div className={s.container} key={user.id}>
                        <div className={s.column}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={s.avatar} src={!user.photos.small === false ? user.photos.small : anonymous} alt=""/>
                            </NavLink>
                            {user.followed ?
                                <button disabled={props.state.isBtnDisabled.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>

                                : <button disabled={props.state.isBtnDisabled.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id);
                                }}>Follow</button>}
                        </div>
                        <div className={s.column}>
                            <div className={s.item}>Name:<span> {user.name}</span></div>
                            <div className={s.item}>Nickame:<span> {user.uniqueUrlName}</span></div>
                        </div>

                    </div>
                )}

            <Pagination
                activePage={props.state.currentPage}
                itemsCountPerPage={10}
                totalItemsCount={props.state.totalCount}
                pageRangeDisplayed={8}
                onChange={props.onPageChange}
                linkClass={s.page}
                activeClass={s.currentPage}
                innerClass={s.pages_row}/>
        </div>
    )

}


export default Users;
