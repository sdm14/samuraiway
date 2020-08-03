import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

   let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   let messagesElements = props.messagesData.map(messages => <Message message={messages.message} />)

   let sendMessage = () => {
      props.sendMessage()
   }

   let onMessageChange = (event) => {
      props.onMessageChange(event.target.value)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea onChange={onMessageChange} value={props.newMessageBody}></textarea></div>
               <div><button onClick={sendMessage}>Send Message</button></div>
            </div>

         </div>
      </div>
   )
}

export default Dialogs