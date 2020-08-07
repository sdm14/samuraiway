import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer';
const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store