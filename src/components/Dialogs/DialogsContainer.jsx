import Dialogs from './Dialogs'
import { sendMessageActionCreator } from './../../redux/dialogsReducer'
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
         sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
         }
      }
   )
}


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)