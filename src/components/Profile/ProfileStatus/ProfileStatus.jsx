import React from 'react'

class ProfileStatus extends React.Component {

   state = {
      editMode: false
   }

   activateMode = () => {
      this.setState({
         editMode: !this.state.editMode
      })
   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <div>
                  <input autoFocus={true} onBlur={this.activateMode} value={this.props.status} />
               </div>
               : <div>
                  <span onDoubleClick={this.activateMode}>{this.props.status}</span>
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus