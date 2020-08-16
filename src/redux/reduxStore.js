import thunkMiddleware from 'redux-thunk'
import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './appReducer'
const { createStore, combineReducers, applyMiddleware } = require("redux")



const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store