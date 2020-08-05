import React from 'react'
import { connect } from 'react-redux'
import { toggleFollowAC, setUsersAC } from '../../redux/usersReducer'
import UsersClass from './UsersClass'


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleFollow: (userId) => {
         dispatch(toggleFollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UsersContainer