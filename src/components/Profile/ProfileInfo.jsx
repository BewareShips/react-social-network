import React from 'react';
import Preloader from '../../components/Common/Preloader/Preloader';
import s from './Profile.module.css'
import ProfileStatus from  './ProfileStatus'





const ProfileInfo = (props) =>{
  if(!props.profile){
    return <Preloader />
  }
  return (
      <div>
        {/* <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBJ7FPa8aIBqXM_lYdIHfRbpdjq8-7nqlqaQ&usqp=CAU' /> 
        </div> */}
        <img src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
  )
}

export default ProfileInfo;