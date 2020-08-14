import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Common/FormControls/FormControls'
import { required } from '../../utils/validators'


const LoginForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field placeholder={"login"} name={"login"} component={Input} validate={[required]} />
      </div>
      <div>
         <Field placeholder={"password"} name={"password"} component={Input} validate={[required]} />
      </div>
      <div>
         <Field type='checkbox' name={"rememberMe"} component={Input} /> Remember me
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