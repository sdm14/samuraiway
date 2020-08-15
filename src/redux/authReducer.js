import { authApi } from '../api/api'
import { stopSubmit } from 'redux-form'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data
         }
      default:
         return state
   }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })


export const getAuthMeThunkCreator = () => {
   return (dispatch) => {
      authApi.getAuthMe().then(data => {
         if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login, true))
         }
      })
   }
}

export const login = (email, password, rememberMe) => (dispatch) => {

   authApi.login(email, password, rememberMe)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(getAuthMeThunkCreator())
         } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', { _error: message }))
         }
      })
}

export const logout = () => (dispatch) => {
   authApi.logout().then(res => {
      if (res.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}