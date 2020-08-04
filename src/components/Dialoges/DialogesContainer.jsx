import React from 'react';
import DialogItem from './DialogItem/DialogItems';
import Message from './Message/Message';
import { updateMessageActionCreater, sendMessageCreator } from '../../Redux/dialogsReducer';
import Dialoges from './Dialoges';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state)=>{
  return {
    dialogPage: state.dialogPage,
  }
 }

 let mapDispatchToProps = (dispatch)=>{
  return {
    updateMessageActionCreater: (body)=>{
      dispatch(updateMessageActionCreater(body))
    },
    sendMessage: ()=>{
      dispatch(sendMessageCreator())
    }
  }
 }

export default compose (connect(mapStateToProps,mapDispatchToProps),withAuthRedirect) (Dialoges);