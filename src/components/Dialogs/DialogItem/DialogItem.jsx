import React from "react";
import { NavLink } from "react-router-dom";
import css from './../Dialogs.module.css';


const DialogItem = (props) => {
    let URLId = '/dialogs/' + props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={URLId} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;