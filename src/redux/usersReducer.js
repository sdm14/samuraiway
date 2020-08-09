import { userApi } from '../api/api'

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const ISLOADING = 'ISLOADING'
const IS_FOLLOW_PROGRESS = 'IS_FOLOW_PROGRESS'


let initialstate = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isLoading: true,
   followProgress: []
}


export const usersReducer = (state = initialstate, action) => {
   switch (action.type) {
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: !u.followed }
               }

               return u
            })
         }

      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }

      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalCount
         }

      case ISLOADING:
         return {
            ...state,
            isLoading: action.isLoading
         }

      case IS_FOLLOW_PROGRESS:
         return {
            ...state,
            followProgress: action.isFollow
               ? [...state.followProgress, action.userId]
               : state.followProgress.filter(id => id !== action.userId)
         }

      default:
         return state
   }
}

export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const toggleIsLoading = (isLoading) => ({ type: ISLOADING, isLoading })
export const toggleFollowProgress = (isFollow, userId) => ({ type: IS_FOLLOW_PROGRESS, isFollow, userId })


export const getUserThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsLoading(true))
      userApi.getUsers(currentPage, pageSize)
         .then(data => {
            dispatch(toggleIsLoading(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
         })
   }
}

export const onPageChangeThunkCreator = (pageNumber, pageSize) => {
   return (dispatch) => {
      dispatch(setCurrentPage(pageNumber))
      dispatch(toggleIsLoading(true))
      userApi.getUsers(pageNumber, pageSize)
         .then(data => {
            dispatch(toggleIsLoading(false))
            dispatch(setUsers(data.items))
         })
   }
}

export const followThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowProgress(true, userId))
      userApi.postFollow(userId)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(toggleFollow(userId))
            }
            dispatch(toggleFollowProgress(false, userId))
         })
   }
}

export const unfollowThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowProgress(true, userId))
      userApi.deleteUnfollow(userId)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(toggleFollow(userId))
            }
            dispatch(toggleFollowProgress(false, userId))
         })
   }
} 