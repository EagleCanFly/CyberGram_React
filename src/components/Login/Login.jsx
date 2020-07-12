import React from "react";
import {Field, Form} from "react-final-form";

const Login = (props) => {

    const required = value => (value ? undefined : 'This field is required')

    return (<Form onSubmit={props.onSubmit}
                  render={({handleSubmit, submitError}) => (

                      <form
                          className={'form-group w-50 m-3'}
                          onSubmit={handleSubmit}>

                          <div>
                              <Field validate={required}
                                     name="email">
                                  {({input, meta}) => (
                                      <div className={meta.touched ? 'was-validate' : ''}>
                                          <label htmlFor="email">Email</label>
                                          <input name={'email'}
                                                 className={'form-control'}
                                                 {...input}
                                                 type="text"
                                                 placeholder={meta.touched && (meta.error || meta.submitError)}/>
                                      </div>
                                  )}</Field>
                          </div>
                          <div>
                              <Field validate={required}
                                     name="password">
                                  {({input, meta}) => (
                                      <div className={meta.touched ? 'was-validate' : ''}>
                                          <label htmlFor='password'>Password</label>
                                          <input name={'password'}
                                                 className={'form-control'}
                                                 {...input}
                                                 type="password"
                                                 placeholder={meta.touched && meta.error}/>
                                      </div>
                                  )}
                              </Field>
                          </div>
                          {props.captchaUrl &&
                          <div className={'mt-3'}>
                              <span>Enter the captcha</span>
                              <img src={props.captchaUrl} alt="captcha"/>
                             <Field name={'captcha'} component={"input"}/>
                          </div>}
                          <button className={'btn btn-outline-secondary mt-4'} type="submit">Sign in</button>
                          {submitError && <div className="alert alert-danger mt-4">{submitError}</div>}

                          <div style={{marginTop: 30 + 'px'}}>
                              <span>starrcraft@mail.ru</span>
                              <br/>
                              <span>orlov123</span>
                          </div>
                      </form>

                  )}
        />

    );
}

export default Login;