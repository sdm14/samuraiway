const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'


let initialstate = {
   users: [
      // {
      //    id: 1,
      //    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmKR9NH4kpsBqdDJb8Wi52EtHoUBnK83-0-w&usqp=CAU",
      //    followed: true,
      //    fullName: 'Daulet',
      //    status: 'first status',
      //    location: { city: 'Kostanai', country: 'KZ' }
      // },
      // {
      //    id: 2,
      //    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmKR9NH4kpsBqdDJb8Wi52EtHoUBnK83-0-w&usqp=CAU",
      //    followed: false,
      //    fullName: 'Niyaz',
      //    status: 'second status',
      //    location: { city: 'Almaty', country: 'KZ' }
      // },
      // {
      //    id: 3,
      //    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmKR9NH4kpsBqdDJb8Wi52EtHoUBnK83-0-w&usqp=CAU",
      //    followed: true,
      //    fullName: 'Ulan',
      //    status: 'thirth status',
      //    location: { city: 'Astana', country: 'KZ' }
      // }
   ]
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
            users: [...state.users, ...action.users]
         }

      default:
         return state
   }
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
