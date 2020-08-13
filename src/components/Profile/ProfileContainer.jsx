import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunkCreator, updateStatusThunkCreator, getStatusThunkCreator } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 9752
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
      status: state.profilePage.status
   }
}

export default compose(connect(mapStateToProps, { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
   withRouter)(ProfileContainer)