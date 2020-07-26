// import postdataReducer from "./postDataReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";



// let store = {
//   _state:{
//     postPage:{
//       postData:[
//       {id:1,message:'Wake up Neo', likesCount:'12'},
//       {id:2,message:'You lost everything', likesCount:'13'},
//       ],
//       newPostText:'it-kam'}
//     ,
//     dialogPage:{
//       dialogData:[
//       {id:1, name:'eer0', image:'https://wow.zamimg.com/uploads/screenshots/normal/875650.jpg'},
//       {id:2, name:'Happy', image:'https://i.imgur.com/62YTkS3.jpg'},
//       {id:3, name:'Infi', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTikKL_rImb6xwLq5JdBgTG_ivTvQx9SVCAOQ&usqp=CAU'},
//       {id:4, name:'Foggy', image:'https://wow.zamimg.com/uploads/screenshots/normal/875638.jpg?maxWidth=750'},
//       {id:5, name:'Moon', image:'https://wow.zamimg.com/uploads/screenshots/normal/892583.jpg'},
//       {id:6, name:'Lyn', image:'https://wow.zamimg.com/uploads/screenshots/normal/875653.jpg?maxWidth=750'}
//     ],
//       messageData:[
//       {id:1, message:'Hi'},
//       {id:2, message:'Whats up nigger?'},
//       {id:3, message:'See you'},
      
//     ],
//     newMessageText:''},
//     sidebar:{}
    
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer){
//     this.renderEntireTree = observer;
//   },
//   dispatch(action){

//     this._state.postPage.postData = postdataReducer(this._state.postPage.postData, action)
//     this._state.postPage.dialogPage = dialogsReducer(this._state.dialogPage, action)
//     this._state.postPage.sidebar = sidebarReducer(this._state.sidebar, action)
      
//     this.renderEntireTree (this._state)
    
//   }


// }









// export default store