import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from './../../redux/dialogsReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
   return (
      {
         dialogsData: state.dialogsPage.dialogsData,
         messagesData: state.dialogsPage.messagesData,
         newMessageBody: state.dialogsPage.newMessageBody,
         isAuth: state.auth.isAuth
      }
   )
}

const mapDispatchToProps = (dispatch) => {
   return (
      {
         onMessageChange: (event) => {
            dispatch(updateNewMessageBodyActionCreator(event))
         },
         sendMessage: () => {
            dispatch(sendMessageActionCreator())
         }
      }
   )
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer