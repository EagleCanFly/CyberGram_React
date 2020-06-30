import React from "react";
import {Field, Form} from "react-final-form";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = parameters => {
        props.login(parameters.email, parameters.password);
        if (props.isAuth === true) {
            return  <Redirect to='/profile'/>
        }
    }

    if (props.isAuth === true) return <Redirect to='/profile'/>
    const required = value => (value ? undefined : 'Required')

    return  (

        <Form onSubmit={onSubmit}
              validate={required}
              render={({handleSubmit}) => (
                  <form className={'form-group w-50 m-3'} onSubmit={handleSubmit}>

                      <div>
                          <label htmlFor="email">Email</label>
                          <Field  name="email" component="input" type="text"/>
                      </div>
                      <div>
                          <label htmlFor="password">Password</label>
                          <Field className={'form-control'} name="password" component="input" type="text"/>
                      </div>
                      <div className={'form-group form-check'}>
                          <Field className={"form-check-input"}  name="rememberMe" component="input" type="checkbox"/>
                          <label className={'form-check-label'} htmlFor="rememberMe">Remember me</label>
                      </div>
                      <button className={'btn btn-outline-secondary'} type="submit">Sign in</button>
                  </form>
              )}
        />
    );
}

export default Login;