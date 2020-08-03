import React from 'react'
import styles from './users.module.css'

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmKR9NH4kpsBqdDJb8Wi52EtHoUBnK83-0-w&usqp=CAU",
            followed: true,
            fullName: 'Daulet',
            status: 'first status',
            location: { city: 'Kostanai', country: 'KZ' }
         },
         {
            id: 2,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmKR9NH4kpsBqdDJb8Wi52EtHoUBnK83-0-w&usqp=CAU",
            followed: false,
            fullName: 'Niyaz',
            status: 'second status',
            location: { city: 'Almaty', country: 'KZ' }
         },
         {
            id: 3,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmKR9NH4kpsBqdDJb8Wi52EtHoUBnK83-0-w&usqp=CAU",
            followed: true,
            fullName: 'Ulan',
            status: 'thirth status',
            location: { city: 'Astana', country: 'KZ' }
         }
      ])
   }


   return (
      <div>
         {props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photoUrl} className={styles.photo} />
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
                     {u.fullName}
                  </div>
                  <div>
                     {u.status}
                  </div>
               </span>

               <span>
                  <div>
                     {u.location.country}
                  </div>
                  <div>
                     {u.location.city}
                  </div>
               </span>
            </span>

         </div>)}
      </div>
   )
}

export default Users