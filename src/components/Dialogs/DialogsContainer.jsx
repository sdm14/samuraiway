import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from './../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


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

const AuthRedirect = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)

export default DialogsContainer