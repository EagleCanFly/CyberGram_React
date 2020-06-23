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
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentWillMount() {
        this.props.getUsers(this.props.state.userPages, this.props.state.currentPage);
    }

    onPageChange = (pageNumber) => {

        if (this.props.state.currentPage !== pageNumber) {
            this.props.getUsersOnUpdate(this.props.state.userPages, pageNumber);
        }
    }

    render() {

        return <div>
            {this.props.state.isFetching ? <Loader/> : <Users state={this.props.state}
                                                              follow={this.props.follow}
                                                              unfollow={this.props.unfollow}
                                                              toggleBtnDisabled={this.props.toggleBtnDisabled}
                                                              setUsers={this.props.setUsers}
                                                              setUsersPage={this.props.setUsersPage}
                                                              setTotalCount={this.props.setTotalCount}
                                                              onPageChange={this.onPageChange}/>}

        </div>
    }
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
