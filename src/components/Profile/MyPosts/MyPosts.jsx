import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

   let postsElements = props.postData
      .map(post => <Post message={post.message} likesCount={post.likesCount} />)

   let onPostChange = (event) => {
      props.updateNewPostText(event.target.value)
   }

   let newPost = () => {
      props.newPost()
   }

   return (
      <div className={s.postsBlock}>
         <h3>My Posts</h3>
         <div>
            New post
         </div>
         <div>
            <textarea onChange={onPostChange} value={props.newTextPost} />
         </div>
         <div>
            <button onClick={newPost}>Add post</button>
         </div>
         {postsElements}
      </div>
   )
}

export default MyPosts