import React from "react";
import { NavLink } from "react-router-dom";
import css from './Header.module.css';


const Header = (props) => {
    return <header className={css.header}>
        <h1>Test Project</h1>

        <div className={css.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
