import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from './../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


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


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)