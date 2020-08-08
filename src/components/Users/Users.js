import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/img/ava.jpg'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

const Users = (props) => {

   // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) Тотал каунт слишком большой
   let pages = []
   for (let i = 1; i <= 20; i++) {
      pages.push(i)
   }


   return (
      < div >
         <div>
            {pages.map(p => {
               return <span
                  className={props.currentPage === p && styles.selectedPage}
                  onClick={() => props.onPageChange(p)}
               >
                  {p}
               </span>
            })}
         </div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo} />
                     </NavLink>
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => {
                           axios
                              .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "52d845d8-1943-4052-91df-960400832ef1"
                                 }
                              })
                              .then(res => {
                                 if (res.data.resultCode === 0) {
                                    props.toggleFollow(u.id)
                                 }
                              })
                        }}>
                           Unfollow
                        </button>

                        : <button onClick={() => {
                           axios
                              .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "52d845d8-1943-4052-91df-960400832ef1"
                                 }
                              })
                              .then(res => {
                                 if (res.data.resultCode === 0) {
                                    props.toggleFollow(u.id)
                                 }
                              })
                        }}>
                           Follow
                        </button>}
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

export default Users
