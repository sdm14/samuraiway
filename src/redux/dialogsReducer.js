const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
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
   ],
   newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messagesData: [...state.messagesData, { id: Date.now(), message: state.newMessageBody }],
            newMessageBody: ''
         }
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         }
      default:
         return state
   }
}

export const updateNewMessageBodyActionCreator = (message) => {
   return ({ type: UPDATE_NEW_MESSAGE_BODY, body: message })
}

export const sendMessageActionCreator = () => {
   return ({ type: SEND_MESSAGE })
}