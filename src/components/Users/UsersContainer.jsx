import React from 'react'
import { connect } from 'react-redux'
import { toggleFollow, toggleFollowProgress, onPageChangeThunkCreator, getUserThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'


class UsersContainer extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
   }

   onPageChange = (pageNumber) => {
      this.props.onPageChangeThunkCreator(pageNumber, this.props.pageSize)
   }

   render() {
      return <>
         {this.props.isLoading
            ? <Preloader />
            : <Users
               currentPage={this.props.currentPage}
               onPageChange={this.onPageChange}
               users={this.props.users}
               followProgress={this.props.followProgress}
               followThunkCreator={this.props.followThunkCreator}
               unfollowThunkCreator={this.props.unfollowThunkCreator}
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
      isLoading: state.usersPage.isLoading,
      followProgress: state.usersPage.followProgress
   }
}


export default connect(mapStateToProps,
   { toggleFollow, toggleFollowProgress, getUserThunkCreator, onPageChangeThunkCreator, followThunkCreator, unfollowThunkCreator })
   (UsersContainer)
