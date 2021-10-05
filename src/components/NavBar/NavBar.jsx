import React from "react";
import css from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}><NavLink to='/Profile' activeClassName={css.active}>Profile</NavLink></div>
      <div className={css.item}><NavLink to='/Dialogs' activeClassName={css.active}>Message</NavLink></div>
      <div className={css.item}><NavLink to='/News' activeClassName={css.active}>News</NavLink></div>
      <div className={css.item}><NavLink to='/Music' activeClassName={css.active}>Music</NavLink></div>
      <div className={css.item}><NavLink to='/Settings' activeClassName={css.active}>Settings</NavLink></div>
    </nav>
  )
}

export default NavBar;
