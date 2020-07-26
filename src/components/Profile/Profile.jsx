import React from 'react';

import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyPosts from './MyPosts/MyPosts';




const Profile = (props) =>{
debugger;

  return (
      <div className={s.container}>
        <MyPostsContainer store={props.store}  />
      </div>
  )
}

export default Profile;