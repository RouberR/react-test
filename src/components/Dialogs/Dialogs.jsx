import React from "react";
import { NavLink } from "react-router-dom";
import css from './Dialogs.module.css';


const Message = (props) => {
    return <div className={css.message}>{props.message}</div>
}


const DialogItem = (props) => {
    let URLId = '/dialogs/' + props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={URLId} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}



const Dialogs = (props) => {

    let dialogsData = [
        { id: 0, name: 'Rouber' },
        { id: 1, name: 'Evgen' },
        { id: 2, name: 'Fid' }
    ]
    
    let messagesData = [
        { id: 0, message: 'Hi' },
        { id: 1, message: 'How are you?' }
    ]



    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>

            <div className={css.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>


        </div>
    )
}

export default Dialogs;