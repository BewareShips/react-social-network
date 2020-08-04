import React from "react"
import MyPosts from './MyPosts'
import { updatePostTextActionCreater, addPostActionCreator } from "../../../Redux/postDataReducer"
import { connect } from "react-redux";



// const MyPostsContainer = (props) =>{
// let state = props.store.getState();
// debugger;
// const addingPost = () =>{
//   props.store.dispatch(addPostActionCreator())
  
// }

// const onPostChange = (text) =>{
  
//   props.store.dispatch(updatePostTextActionCreater(text))
// }

// return (
//   <MyPosts updateNewPostText={onPostChange} addingPost={addingPost} posts={state.postPage.postData} newPostText={state.postPage.newPostText}/>
// )
// }
const mapStateToProps =(state)=>{
  return {
    posts:state.postPage.postData,
    newPostText:state.postPage.newPostText
  }
}

const mapDispatchToProps =(dispatch)=>{
  return {
    updateNewPostText:(text)=>{
     dispatch(updatePostTextActionCreater(text))
    },
    addingPost: ()=>{
      return dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer