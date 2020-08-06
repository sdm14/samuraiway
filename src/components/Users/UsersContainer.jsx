import React from 'react'
import { connect } from 'react-redux'
import { toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'


class UsersContainer extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
         })
   }

   onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(res => {
            this.props.setUsers(res.data.items)
         })
   }

   render() {
      return <Users
         currentPage={this.props.currentPage}
         onPageChange={this.onPageChange}
         users={this.props.users}
         toggleFollow={this.props.toggleFollow}
      />
   }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
