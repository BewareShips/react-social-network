import { usersAPI, profileAPI } from "../API/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
  postData:[
    {id:1,message:'Wake up Neo', likesCount:'12'},
    {id:2,message:'You lost everything', likesCount:'13'},
    ],
  newPostText:'it-kam',
  profile: null,
  status: "hi"
}

 const postdataReducer = (state = initialState,action) =>{
   switch(action.type) {
     case ADD_POST:{
      const newPost ={
        id:5,
        message:state.newPostText,
        likesCount:0
      }
      return {...state,postData:[...state.postData,newPost],newPostText:''}
      
    }
    case UPDATE_POST_TEXT:{
      return {...state,newPostText:action.newText}
    }
    case SET_USER_PROFILE:{
      return {...state,profile: action.profile}
    }
    case SET_STATUS:{
      return {...state,status: action.status}
    }
    default: return state;
   }
}

export const addPostActionCreator =() => {
  return {type: ADD_POST}
}
export const updatePostTextActionCreater =(text) => {
  return {type:UPDATE_POST_TEXT, newText:text}
}

export const setUserProfile =(profile) => {
  return {type:SET_USER_PROFILE, profile}
}

export const setStatus =(status) => {
  return {type:SET_STATUS, status}
}




export const getUserProfile = (userId) => (dispatch) =>{
 return usersAPI.getProfile(userId).then(response => {
  dispatch(setUserProfile(response.data))
 })
}

export const getStatus = (userId) => (dispatch) =>{
  return profileAPI.getStatus(userId).then(response => {
   dispatch(setStatus(response.data))
  })
 }

 export const updateStatus = (status) => (dispatch) =>{
  return profileAPI.updateStatus(status).then(response => {
    if(response.data.resulCode === 0){
      dispatch(setStatus(status))
    }
   
  })
 }

 
export default postdataReducer