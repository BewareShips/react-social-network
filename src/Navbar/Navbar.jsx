import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import Sydebar from './Sydebar/Sydebar';

const Navbar = (props) =>{
  return (
    <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialoges"  activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news"  activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music"  activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings"  activeClassName={s.active}>Settings</NavLink>
    </div>
    <div>
      {/* <Sydebar className={s.sydebar} store={props.store}/> */}
    </div>
  </nav>
  )
}

export default Navbar;