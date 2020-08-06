import React from 'react'
import { connect } from 'react-redux'
import { toggleFollow, setUsers, setCurrentPage, setTotalCount, toggleIsLoading } from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'



class UsersContainer extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.toggleIsLoading(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(res => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
         })
   }

   onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsLoading(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(res => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(res.data.items)
         })
   }

   render() {
      return <>
         {this.props.isLoading
            ? <Preloader />
            : <Users
               currentPage={this.props.currentPage}
               onPageChange={this.onPageChange}
               users={this.props.users}
               toggleFollow={this.props.toggleFollow}
            />}
      </>
   }
}


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading
   }
}


export default connect(mapStateToProps,
   { toggleFollow, setUsers, setCurrentPage, setTotalCount, toggleIsLoading })
   (UsersContainer)
