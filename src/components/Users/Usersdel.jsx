import React from "react";
import * as axios from "axios";


class Usersdel extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.userPages}&page=${this.props.state.currentPage}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount / 100);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setUsersPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.userPages}&page=${pageNumber}`).then(response => {

            this.props.setUsers(response.data.items)


        });

    }

    render() {
        return <Usersdel/>
    }
}
export default Usersdel;
