import { profileReducer } from "./profileReducer"
import { dialogsReducer } from "./dialogsReducer"

let store = {
   _state: {
      profilePage: {
         postData: [
            { id: 1, message: 'Good', likesCount: 12 },
            { id: 2, message: 'Lose', likesCount: 2 },
            { id: 3, message: 'we', likesCount: 52 }
         ],
         newTextPost: 'IT-kam'
      },

      dialogsPage: {
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
      },
   },
   _callSubscriber() {
      return
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      profileReducer(this._state.profilePage, action)
      dialogsReducer(this._state.dialogsPage, action)

      this._callSubscriber()
   }
}

window.st = store


export default store