import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";

import Login from "./Login";
import {login} from "../../redux/authReducer";


class LoginContainer extends React.Component {
    render() {
        return <Login login={this.props.login}
        isAuth={this.props.isAuth}/>
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {login}))
(LoginContainer);
