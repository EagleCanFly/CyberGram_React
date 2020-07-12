import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import Login from "./Login";
import {login} from "../../redux/authReducer";
import {FORM_ERROR} from "final-form";
import {Redirect} from "react-router-dom";


const LoginContainer = (props) => {

    const onSubmit = async (parameters) => {
       await props.login(parameters.email, parameters.password, parameters.captcha);

        if (props.isAuth === true) {
            return <Redirect to='/profile'/>
        } else  {
            return {[FORM_ERROR]: 'Login Failed'};
        }
    }
    if (props.isAuth === true) return <Redirect to='/profile'/>

    return <Login login={props.login}
                  isAuth={props.isAuth}
                  captchaUrl={props.captchaUrl}
                  isError={props.isError}
                  onSubmit={onSubmit}/>

}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isError: state.auth.isError,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose(
    connect(mapStateToProps, {login}))
(LoginContainer);
