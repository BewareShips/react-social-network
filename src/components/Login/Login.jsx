import React from 'react';
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) =>{
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} component={"input"}/>
        </div>
        <div>
        <Field placeholder={"Password"} component={"input"}/>
        </div>
        <div>
        <Field component={"input"} type={"checkbox"}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm =reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
  const onSubmit = (formData) =>{

  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={}/>
    </div>
    
  )
}

export default Login