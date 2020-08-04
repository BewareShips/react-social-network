import React from 'react';
import s from './Dialoges.module.css'
import DialogItem from './DialogItem/DialogItems';
import Message from './Message/Message';
import { updateMessageActionCreater, sendMessageCreator } from '../../Redux/dialogsReducer';
import { Redirect } from 'react-router-dom';










const Dialoges = (props) =>{
  let state = props.dialogPage;

  const dialogElements = state.dialogData.map(({name, id, image})=><DialogItem name={name} id={id} image={image}/>)

  const messageElements = state.messageData.map(({message})=><Message content={message}/>)

  const newMessageBody = state.newMessageText

  const onSendMessageClick  = () =>{
    props.sendMessage()
  }
  const onNewMessageChange =(event) =>{
    let body = event.target.value
    props.updateMessageActionCreater(body)
  }
  if(!props.isAuth){
    return <Redirect to={"./login"}/>
  }


  return (
    <div>
      <div className={s.dialoges}>
        <div className={s.dialogesItem}>
          {dialogElements}
        </div>
        <div className={s.messages}>
          <div>{messageElements}</div>
          <div  className={s.newMessage}>
            <textarea className={s.textArea} value={newMessageBody} onChange={onNewMessageChange}></textarea>
            <button className={s.button} onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dialoges;