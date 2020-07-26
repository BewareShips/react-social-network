import React from 'react';
import DialogItem from './DialogItem/DialogItems';
import Message from './Message/Message';
import { updateMessageActionCreater, sendMessageCreator } from '../../Redux/dialogsReducer';
import Dialoges from './Dialoges';










const DialogesContainer = (props) =>{
  debugger;
  let state = props.store.getState().dialogPage;

  const onSendMessageClick  = () =>{
    props.store.dispatch(sendMessageCreator())
  }
  const onNewMessageChange =(body) =>{
    props.store.dispatch(updateMessageActionCreater(body))
  }


  return (
    <Dialoges updateMessageActionCreater={onNewMessageChange} sendMessage={onSendMessageClick} dialogPage={state}/>
  )
}

export default DialogesContainer;