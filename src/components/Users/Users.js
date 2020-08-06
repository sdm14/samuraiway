import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/img/ava.jpg'

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
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo} />
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => props.toggleFollow(u.id)}>Follow</button>
                        : <button onClick={() => props.toggleFollow(u.id)}>Unfollow</button>}
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