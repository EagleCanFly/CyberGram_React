import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {setLoginData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true}).then(response => {
            this.props.setLoginData(response.data);
            debugger
        })
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        resultCode: state.auth.resultCode

    }
};

export default connect(mapStateToProps, {setLoginData})(HeaderContainer);