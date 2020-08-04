import React from 'react';

import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';




const Profile = (props) =>{
  return (
      <div className={s.container}>
        <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer   />
      </div>
  )
}

export default Profile;