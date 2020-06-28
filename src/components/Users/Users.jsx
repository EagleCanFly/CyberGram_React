import React, {useEffect, useState} from "react";
import s from "./Users.module.scss";
import anonymous from "./../../images/unknown-user.jpg";
import {NavLink} from "react-router-dom";
import Pagination from "react-js-pagination";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    follow, getUsers, getUsersOnUpdate,
    setTotalCount,
    setUsers,
    setUsersPage,
    toggleBtnDisabled,
    toggleIsFetching,
    unfollow
} from "../../redux/userPageReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Loader from "../common/Loader";


const Users = (props) => {



    useEffect(() => {
        debugger
        props.getUsers(props.state.userPages, props.state.currentPage);
    }, [props.state.userPages]);

    const onPageChange = (pageNumber) => {

        if (props.state.currentPage !== pageNumber) {
            props.getUsersOnUpdate(props.state.userPages, pageNumber);
        }
    }

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
                                <button className={'btn btn-outline-danger btn-sm'} disabled={props.state.isBtnDisabled.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Unfollow</button>

                                : <button className={'btn btn-outline-secondary btn-sm'} disabled={props.state.isBtnDisabled.some(id => id === user.id)} onClick={() => {
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
                onChange={onPageChange}
                linkClass={'page-link'}
                activeClass={s.currentPage}
                innerClass={'pagination'}/>}

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state.usersPage
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setUsersPage,
        setTotalCount,
        toggleIsFetching,
        toggleBtnDisabled,
        getUsers,
        getUsersOnUpdate
    }),
     withAuthRedirect
)(Users);
