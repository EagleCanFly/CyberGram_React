import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    toggleIsFetching,
    setTotalCount,
    setUsers,
    setUsersPage,
    unfollow
} from "../../redux/userPageReducer";
import React from "react";
import * as axios from "axios";
import Loader from "../common/Loader";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.userPages}&page=${this.props.state.currentPage}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount / 100);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setUsersPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.userPages}&page=${pageNumber}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        });

    }

    render() {
        return <>
            {this.props.state.isFetching ? <Loader/> : <Users state={this.props.state}
                                                              follow={this.props.follow}
                                                              unfollow={this.props.unfollow}
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
    toggleIsFetching
})(UsersAPI);
