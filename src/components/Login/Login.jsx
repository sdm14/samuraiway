import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Common/FormControls/FormControls'
import { required } from '../../utils/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import s from './../Common/FormControls/FormControls.module.css'


const LoginForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field placeholder={"email"} name={"email"} component={Input} validate={[required]} />
      </div>
      <div>
         <Field placeholder={"password"} name={"password"} type={"password"} component={Input} validate={[required]} />
      </div>
      <div>
         <Field type='checkbox' name={"rememberMe"} component={Input} /> Remember me
      </div>
      {props.error && <div className={s.formSummaryError}>
         {props.error}
      </div>}
      <div>
         <button type='submit'>login</button>
      </div>
   </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = (props) => {

   const sendData = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={sendData} />
   </>
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { login, logout })(LoginPage)