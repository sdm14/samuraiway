import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'
const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer
})

let store = createStore(reducers)

export default store