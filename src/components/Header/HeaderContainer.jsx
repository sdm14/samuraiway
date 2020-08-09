import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthMeThunkCreator } from '../../redux/authReducer'


class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.getAuthMeThunkCreator()
   }

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, { getAuthMeThunkCreator })(HeaderContainer)