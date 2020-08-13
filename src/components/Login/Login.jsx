import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field placeholder={"login"} name={"login"} component={"input"} />
      </div>
      <div>
         <Field placeholder={"password"} name={"password"} component={"input"} />
      </div>
      <div>
         <Field type='checkbox' name={"rememberMe"} component={"input"} /> Remember me
      </div>
      <div>
         <button type='submit'>login</button>
      </div>
   </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = (props) => {

   const sendData = (formData) => {
      console.log(formData)
   }

   return <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={sendData} />
   </>
}

export default LoginPage