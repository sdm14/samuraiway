const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
   postData: [
      { id: 1, message: 'Good', likesCount: 12 },
      { id: 2, message: 'Lose', likesCount: 2 },
      { id: 3, message: 'we', likesCount: 52 }
   ],
   newTextPost: 'IT-kam'
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: Date.now(),
            message: state.newTextPost,
            likesCount: 20
         }
         let stateCopy = { ...state }
         stateCopy.postData = [...state.postData]
         stateCopy.postData.push(newPost)
         return stateCopy
      }
      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = { ...state }
         stateCopy.newTextPost = action.newText
         return stateCopy
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