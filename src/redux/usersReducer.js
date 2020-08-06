const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const ISLOADING = 'ISLOADING'


let initialstate = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isLoading: true
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

      default:
         return state
   }
}

export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const toggleIsLoading = (isLoading) => ({ type: ISLOADING, isLoading })
