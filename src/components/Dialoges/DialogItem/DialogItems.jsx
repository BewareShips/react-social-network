import React from 'react';
import s from './../Dialoges.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) =>{
  return (
    <div className={s.singleDialog + " " + s.active}>
      <img className={s.image} src={props.image} />
      <NavLink to={'/dialoges/' + props.id} className={s.name}>{props.name} </NavLink>
    </div>
  )
}


export default DialogItem;