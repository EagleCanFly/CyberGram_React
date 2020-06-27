import React from "react";
import {Field, Form} from "react-final-form";
import s from "./Login.module.css"
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = parameters => {
        props.login(parameters.email, parameters.password);
        if (props.isAuth === true) {
            return  <Redirect to='/profile'/>
        }
    }

    if (props.isAuth === true) return <Redirect to='/profile'/>
    return  (

        <Form onSubmit={onSubmit}
              render={({handleSubmit}) => (
                  <form className={s.form} onSubmit={handleSubmit}>

                      <div>
                          <label htmlFor="email">Email</label>
                          <Field name="email" component="input" type="text"/>
                      </div>
                      <div>
                          <label htmlFor="password">Password</label>
                          <Field name="password" component="input" type="text"/>
                      </div>
                      <div>
                          <label htmlFor="rememberMe">Remember me</label>
                          <Field name="rememberMe" component="input" type="checkbox"/>
                      </div>
                      <button type="submit">Submit</button>
                  </form>
              )}
        />
    );
}

export default Login;