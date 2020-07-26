import React from "react"
import MyPosts from './MyPosts'
import { updatePostTextActionCreater, addPostActionCreator } from "../../../Redux/postDataReducer"



const MyPostsContainer = (props) =>{
let state = props.store.getState();
debugger;
const addingPost = () =>{
  props.store.dispatch(addPostActionCreator())
  
}

const onPostChange = (text) =>{
  
  props.store.dispatch(updatePostTextActionCreater(text))
}

return (
  <MyPosts updateNewPostText={onPostChange} addingPost={addingPost} posts={state.postPage.postData} newPostText={state.postPage.newPostText}/>
)
}

export default MyPostsContainer