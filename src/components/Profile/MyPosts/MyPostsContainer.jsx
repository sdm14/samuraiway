import React from 'react'
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newTextPost: state.profilePage.newTextPost
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      },
      newPost: () => {
         dispatch(addPostActionCreator())
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer