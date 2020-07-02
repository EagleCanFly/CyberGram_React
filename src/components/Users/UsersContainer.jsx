import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    toggleIsFetching,
    setTotalCount,
    setUsers,
    setUsersPage,
    unfollow, toggleBtnDisabled, getUsers, getUsersOnUpdate
} from "../../redux/userPageReducer";
import React, {useEffect} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.state.userPages, props.state.currentPage);
    }, [props.state.userPages]);

    const onPageChange = (pageNumber) => {
        if (props.state.currentPage !== pageNumber) {
            props.getUsersOnUpdate(props.state.userPages, pageNumber);
        }
    };
    return (
        <Users onPageChange={onPageChange}
               {...props}/>
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
)(UsersContainer);
