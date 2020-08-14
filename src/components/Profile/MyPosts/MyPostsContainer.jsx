import React from 'react'
import MyPosts from './MyPosts'
import { addPostActionCreator } from './../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newTextPost: state.profilePage.newTextPost
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      newPost: (text) => {
         dispatch(addPostActionCreator(text))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer