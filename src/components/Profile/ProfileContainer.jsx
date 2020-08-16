import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunkCreator, updateStatusThunkCreator, getStatusThunkCreator } from '../../redux/profileReducer'
import { withRouter, Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.authUserId
      }

      this.props.getProfileThunkCreator(userId)
      this.props.getStatusThunkCreator(userId)
   }

   render() {
      return <Profile {...this.props} />
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authUserId: state.auth.userId
   }
}

export default compose(connect(mapStateToProps, { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
   withRouter)(ProfileContainer)