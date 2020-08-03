import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="https://c7.hotpng.com/preview/931/209/251/computer-icons-symbol-avatar-logo-clip-art-person-with-helmut.jpg" />
         {props.message}
         <div>
            <span>Like {props.likesCount}</span>
         </div>
      </div>
   )
}

export default Post