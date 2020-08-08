import React from 'react'
import { connect } from 'react-redux'
import { toggleFollow, setUsers, setCurrentPage, setTotalCount, toggleIsLoading } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { userApi } from '../../api/api'



class UsersContainer extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.toggleIsLoading(true)
      userApi.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
         })
   }

   onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsLoading(true)
      userApi.getUsers(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(data.items)
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
