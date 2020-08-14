const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
   messagesData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'KO' },
      { id: 3, message: 'CroCop' },
      { id: 4, message: 'Hug' },
      { id: 5, message: 'Win' },
   ],
   dialogsData: [
      { id: 1, name: 'Daulet' },
      { id: 2, name: 'Aibek' },
      { id: 3, name: 'Omar' },
      { id: 4, name: 'Sultan' },
      { id: 5, name: 'Timur' },
   ]
}

export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messagesData: [...state.messagesData, { id: Date.now(), message: action.text }],
         }
      default:
         return state
   }
}

export const sendMessageActionCreator = (text) => {
   return ({ type: SEND_MESSAGE, text })
}