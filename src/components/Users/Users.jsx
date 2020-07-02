import React from "react";
import s from "./Users.module.scss";
import anonymous from "./../../images/unknown-user.jpg";
import {NavLink} from "react-router-dom";
import Pagination from "react-js-pagination";
import Loader from "../Loader/Loader";

const Users = (props) => {
    return (
        <div>
            {props.state.isFetching ? <Loader/> :

                props.state.users.map(user => <div className={s.container} key={user.id}>
                        <div className={'d-flex flex-column mx-2'}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={s.avatar} src={user.photos.small ? user.photos.small : anonymous}
                                     alt=""/>
                            </NavLink>
                            {user.followed ?
                                <button className={'btn btn-outline-danger btn-sm'}
                                        disabled={props.state.isBtnDisabled.some(id => id === user.id)}
                                        onClick={() => {
                                            props.unfollow(user.id);
                                        }}>Unfollow</button>

                                : <button className={'btn btn-outline-secondary btn-sm'}
                                          disabled={props.state.isBtnDisabled.some(id => id === user.id)}
                                          onClick={() => {
                                              props.follow(user.id);
                                          }}>Follow</button>}
                        </div>
                        <div className={'flex-column'}>
                            <div className={s.item}>Name:<span> {user.name}</span></div>
                            <div className={s.item}>Nickame:<span> {user.uniqueUrlName}</span></div>
                        </div>
                    </div>
                )}
            {props.state.isFetching ? <div></div> : <Pagination
                activePage={props.state.currentPage}
                itemsCountPerPage={10}
                totalItemsCount={props.state.totalCount}
                pageRangeDisplayed={8}
                onChange={props.onPageChange}
                linkClass={'page-link'}
                activeClass={s.currentPage}
                innerClass={'pagination'}/>}

        </div>
    )
}

export default (Users);
