const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
  postData:[
    {id:1,message:'Wake up Neo', likesCount:'12'},
    {id:2,message:'You lost everything', likesCount:'13'},
    ],
    newPostText:'it-kam'
}

 const postdataReducer = (state = initialState,action) =>{
   switch(action.type) {
     case ADD_POST:
      const newPost ={
        id:5,
        message:state.newPostText,
        likesCount:0
      }
      state.postData.push(newPost)
      state.newPostText='';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: return state;
   }
}

export const addPostActionCreator =() => {
  return {type: ADD_POST}
}
export const updatePostTextActionCreater =(text) => {
  return {type:UPDATE_POST_TEXT, newText:text}
}

export default postdataReducer