import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunkCreator, updateStatusThunkCreator, setStatusThunkCreator } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 2
      }

      this.props.getProfileThunkCreator(userId)
      this.props.setStatusThunkCreator(userId)
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

export default compose(connect(mapStateToProps, { getProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator }),
   withRouter)(ProfileContainer)