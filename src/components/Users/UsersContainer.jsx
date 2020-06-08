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
import React from "react";
import Loader from "../common/Loader";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.state.userPages, this.props.state.currentPage);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersOnUpdate(this.props.state.userPages, this.props.state.currentPage, pageNumber);
    }

    render() {
        return <>
            {this.props.state.isFetching ? <Loader/> : <Users state={this.props.state}
                                                              follow={this.props.follow}
                                                              unfollow={this.props.unfollow}
                                                              toggleBtnDisabled={this.props.toggleBtnDisabled}
                                                              setUsers={this.props.setUsers}
                                                              setUsersPage={this.props.setUsersPage}
                                                              setTotalCount={this.props.setTotalCount}
                                                              onPageChange={this.onPageChange}/>}

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.usersPage
    };
};
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setUsersPage,
    setTotalCount,
    toggleIsFetching,
    toggleBtnDisabled,
    getUsers,
    getUsersOnUpdate
})(UsersAPI);
