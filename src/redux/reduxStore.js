import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer
})

let store = createStore(reducers)

export default store