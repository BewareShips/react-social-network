const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogData:[
    {id:1, name:'eer0', image:'https://wow.zamimg.com/uploads/screenshots/normal/875650.jpg'},
    {id:2, name:'Happy', image:'https://i.imgur.com/62YTkS3.jpg'},
    {id:3, name:'Infi', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTikKL_rImb6xwLq5JdBgTG_ivTvQx9SVCAOQ&usqp=CAU'},
    {id:4, name:'Foggy', image:'https://wow.zamimg.com/uploads/screenshots/normal/875638.jpg?maxWidth=750'},
    {id:5, name:'Moon', image:'https://wow.zamimg.com/uploads/screenshots/normal/892583.jpg'},
    {id:6, name:'Lyn', image:'https://wow.zamimg.com/uploads/screenshots/normal/875653.jpg?maxWidth=750'}
  ],
    messageData:[
    {id:1, message:'Hi'},
    {id:2, message:'Whats up nigger?'},
    {id:3, message:'See you'},
    
  ],
  newMessageText:''
}

const dialogsReducer = (state = initialState,action) =>{
  switch(action.type){
    case UPDATE_MESSAGE_BODY:
      return {...state,
        newMessageText:action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageText; 
      return {...state,
        newMessageText:'',
        messageData:[...state.messageData,{id:4, message:body}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator =() => {
  return {type: SEND_MESSAGE}
}
export const updateMessageActionCreater =(body) => {
  return {type:UPDATE_MESSAGE_BODY, body:body}
}

export default dialogsReducer