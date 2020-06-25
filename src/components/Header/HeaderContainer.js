import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {authorize, logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authorize();
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        resultCode: state.auth.resultCode,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {authorize, logout})(HeaderContainer);