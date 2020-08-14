import { userApi, profileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   postData: [
      { id: 1, message: 'Good', likesCount: 12 },
      { id: 2, message: 'Lose', likesCount: 2 },
      { id: 3, message: 'we', likesCount: 52 }
   ],
   profile: null,
   status: ''
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postData: [...state.postData, { id: Date.now(), message: action.text, likesCount: 42 }]
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.data
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      default:
         return state
   }
}

export const addPostActionCreator = (text) => {
   return ({ type: ADD_POST, text })
}

export const setUserProfile = (data) => {
   return ({ type: SET_USER_PROFILE, data })
}

export const getProfileThunkCreator = (userId) => {
   return (dispatch) => {
      userApi.getProfile(userId).then(data => dispatch(setUserProfile(data)))
   }
}

export const setStatus = (status) => {
   return ({ type: SET_STATUS, status })
}

export const getStatusThunkCreator = (userId) => {
   return (dispatch) => {
      profileApi.getStatus(userId).then(res => {
         dispatch(setStatus(res.data))
      })
   }
}

export const updateStatusThunkCreator = (status) => {
   return (dispatch) => {
      profileApi.updateStatus(status).then(res => {
         if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      })
   }
}