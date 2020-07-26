import React from 'react';
import s from './Post.module.css'



const Post = (props) =>{
  return (
    <div className={s.elements}>
      <div className={s.item}>
      <img src="https://i.pinimg.com/originals/08/af/ef/08afef0e8e2749d60e0fada2dd0e5d9d.jpg" className={s.image}></img>
        <div className={s.message}>
          {props.message}
        </div>
      </div>
      <div className={s.likes}> 
        <span>Like</span> {props.likesCount}
      </div>
    </div>
    
  )
}

export default Post