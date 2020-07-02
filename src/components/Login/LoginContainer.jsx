import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import Login from "./Login";
import {login} from "../../redux/authReducer";
import {FORM_ERROR} from "final-form";
import {Redirect} from "react-router-dom";


const LoginContainer = (props) => {

    const onSubmit = async (parameters) => {
        const response = await props.login(parameters.email, parameters.password);

        if (props.isAuth === true) {
            return <Redirect to='/profile'/>
        } else if (response.data.resultCode === 1) {
            return {[FORM_ERROR]: 'Login Failed'};
        }
    }
    if (props.isAuth === true) return <Redirect to='/profile'/>

    return <Login login={props.login}
                  isAuth={props.isAuth}
                  isError={props.isError}
                  onSubmit={onSubmit}/>

}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isError: state.auth.isError
    }
}

export default compose(
    connect(mapStateToProps, {login}))
(LoginContainer);
