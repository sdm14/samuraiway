import React from 'react'
import { connect } from 'react-redux'
import { toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/usersReducer'
import UsersClass from './UsersClass'


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleFollow: (userId) => {
         dispatch(toggleFollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalCount: (totalCount) => {
         dispatch(setTotalCountAC(totalCount))
      }
   }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UsersContainer