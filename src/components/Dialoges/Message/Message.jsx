import React from 'react';
import s from './../Dialoges.module.css'




const Message = (props) =>{
  return (
    <div className={s.singleMessage}>
      {props.content}
    </div>
  )
}


export default Message;