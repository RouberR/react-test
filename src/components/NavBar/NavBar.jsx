import React from "react";
import css from './NavBar.module.css'


const NavBar = () => {
  return <nav className={css.nav}>
    <div><a className={css.item} >Profil</a></div>
    <div><a className={css.item}>Message</a></div>
    <div><a className={css.item}>News</a></div>
    <div><a className={css.item}>Music</a></div>
    <div><a className={css.item}>Setings</a></div>
  </nav>
}

export default NavBar;
