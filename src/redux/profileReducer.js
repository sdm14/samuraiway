import { userApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
   postData: [
      { id: 1, message: 'Good', likesCount: 12 },
      { id: 2, message: 'Lose', likesCount: 2 },
      { id: 3, message: 'we', likesCount: 52 }
   ],
   newTextPost: 'IT-kam',
   profile: null
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postData: [...state.postData, { id: Date.now(), message: state.newTextPost, likesCount: 42 }],
            newTextPost: ''
         }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newTextPost: action.newText
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.data
         }
      default:
         return state
   }
}

export const addPostActionCreator = () => {
   return ({ type: ADD_POST })
}

export const updateNewPostTextActionCreator = (text) => {
   return ({ type: UPDATE_NEW_POST_TEXT, newText: text })
}

export const setUserProfile = (data) => {
   return ({ type: SET_USER_PROFILE, data })
}

export const getProfileThunkCreator = (userId) => {
   return (dispatch) => {
      userApi.getProfile(userId).then(data => dispatch(setUserProfile(data)))
   }
}