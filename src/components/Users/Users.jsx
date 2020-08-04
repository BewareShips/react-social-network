import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../Assets/images.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../API/Api';
import { follow, unfollow } from '../../Redux/usersReducer';




let Users = (props) =>{
  let pagesCount = Math.ceil((props.totalUsersCount/props.pageSize)/100)

  let pages = [];
  for(let i=1;i<=pagesCount;i++){
    pages.push(i)
  }
  return (
    <div>
      <div className={s.numPages}>
        {pages.map(p =>{
          return <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>{props.onPageChanged(p)}}>{p}</span> 
        })}
      </div>
      {
        props.users.map((u)=> 
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.img}></img>
              </NavLink>
              
            </div>
            <div>
              {u.followed 
              ? <button disabled={props.followingInProgress.some(id=>id === u.id)} className={s.button} onClick={ ()=>{ props.unfollow(u.id)}}>Unfollow</button> 
              : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={ ()=>{ props.follow(u.id)}}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;