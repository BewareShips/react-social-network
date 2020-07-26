// import React from 'react';
// import s from './../Dialoges.module.css'
// import { updateMessageActionCreater, sendMessageCreator } from '../../../Redux/dialogsReducer';




// const NewMessage = (props) =>{
//   debugger;
//   let st = props.store.getState();
//   let newMessageBody = st.dialogPage.newMessageText
//   const onSendMessageClick  = () =>{
//     props.store.dispatch(sendMessageCreator())
//   }
//   const onNewMessageChange =(event) =>{
//     let body = event.target.value
//     props.store.dispatch(updateMessageActionCreater(body))
//   }

//   return (
//     <div  className={s.newMessage}>
//       <textarea className={s.textArea} value={newMessageBody} onChange={onNewMessageChange}></textarea>
//       <button className={s.button} onClick={onSendMessageClick}>Sent</button>
//     </div>
//   )
// }


// export default NewMessage;