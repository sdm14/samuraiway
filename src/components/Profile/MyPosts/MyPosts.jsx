import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../utils/validators'
import { Textarea } from '../../Common/FormControls/FormControls'

const maxLength10 = maxLength(10)

const MyPostsForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Ваш пост"} name={"text"} component={Textarea} validate={[required, maxLength10]} />
         </div>
         <div>
            <button type={"submit"}>Add post</button>
         </div>
      </form >
   )
}

const MyPostsReduxForm = reduxForm({ form: 'MyPost' })(MyPostsForm)

const MyPosts = (props) => {

   let postsElements = props.postData
      .map(post => <Post message={post.message} likesCount={post.likesCount} />)


   const sendData = (formData) => {
      props.newPost(formData.text)
      formData.text = ''
   }

   return (
      <div className={s.postsBlock}>
         <h3>My Posts</h3>
         <div>
            New post
         </div>
         <MyPostsReduxForm onSubmit={sendData} />
         {postsElements}
      </div>
   )
}

export default MyPosts