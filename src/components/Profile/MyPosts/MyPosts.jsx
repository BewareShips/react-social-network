import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"




const MyPosts = (props) =>{



const postElements = props.posts.map((el)=> <Post message={el.message} likesCount={el.likesCount} />)

let newPostElement = React.createRef();

const onAddingPost = () =>{
  props.addingPost()
  // props.dispatch(addPostActionCreator())
  
}

const onPostChange = () =>{
  let text = newPostElement.current.value;
  props.updateNewPostText(text)
  // props.dispatch(updatePostTextActionCreater(text))
}

return (
  <div className={s.postsBlock}>
    <h3 className={s.title}>My Post</h3>
    <div>
      <div>
        <textarea ref={newPostElement} className={s.textArea} onChange={onPostChange} value={props.newPostText}/>
      </div>
      <div>
        <button className={s.button} onClick={onAddingPost}>AddPost</button>
      </div>
    </div>
    <div className={s.posts}> 
      {postElements}
    </div>

  </div>
)
}

export default MyPosts