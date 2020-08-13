import thunkMiddleware from 'redux-thunk'
import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer'
import { reducer as formReducer } from 'redux-form'
const { createStore, combineReducers, applyMiddleware } = require("redux")



const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store