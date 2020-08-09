import thunkMiddleware from 'redux-thunk'
import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");


const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store