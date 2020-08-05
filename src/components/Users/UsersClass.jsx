import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/ava.jpg'
import { setCurrentPageAC } from '../../redux/usersReducer'


class UsersClass extends React.Component {

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

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

      let pages = []
      for (let i = 1; i <= 20; i++) {
         pages.push(i)
      }


      return (
         < div >
            <div>
               {pages.map(p => {
                  return <span
                     className={this.props.currentPage === p && styles.selectedPage}
                     onClick={() => this.onPageChange(p)}
                  >
                     {p}
                  </span>
               })}
            </div>
            {
               this.props.users.map(u => <div key={u.id}>
                  <span>
                     <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo} />
                     </div>
                     <div>
                        {u.followed
                           ? <button onClick={() => this.props.toggleFollow(u.id)}>Follow</button>
                           : <button onClick={() => this.props.toggleFollow(u.id)}>Unfollow</button>}
                     </div>
                  </span>

                  <span>

                     <span>
                        <div>
                           {u.name}
                        </div>
                        <div>
                           {u.status}
                        </div>
                     </span>

                     <span>
                        <div>
                           {"u.location.country"}
                        </div>
                        <div>
                           {"u.location.city"}
                        </div>
                     </span>
                  </span>

               </div>)
            }
         </div >
      )
   }
}

export default UsersClass