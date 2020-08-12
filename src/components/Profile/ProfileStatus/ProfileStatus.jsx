import React from 'react'

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateMode = () => {
      this.setState({
         editMode: !this.state.editMode
      })
      this.props.updateStatusThunkCreator(this.state.status)
   }

   onStatusChange = (event) => {
      this.setState({
         status: event.target.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <div>
                  <input autoFocus={true}
                     onBlur={this.activateMode}
                     value={this.state.status}
                     onChange={this.onStatusChange}
                  />
               </div>
               : <div>
                  <span onDoubleClick={this.activateMode}>{this.props.status ? this.props.status : 'No status'}</span>
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus