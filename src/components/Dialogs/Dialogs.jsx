import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { reduxForm, Field } from 'redux-form'


const DialogsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Ваш текст"} name={"text"} component={"textarea"} />
         </div>
         <div>
            <button type={"submit"}>Send message</button>
         </div>
      </form>
   )
}

const DialogsReduxForm = reduxForm({ form: "Dialogs" })(DialogsForm)

const Dialogs = (props) => {

   let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   let messagesElements = props.messagesData.map(messages => <Message message={messages.message} />)

   const sendDialog = (formData) => {
      props.sendMessage(formData.text)
      formData.text = ''
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <DialogsReduxForm onSubmit={sendDialog} />
         </div>
      </div>
   )
}

export default Dialogs