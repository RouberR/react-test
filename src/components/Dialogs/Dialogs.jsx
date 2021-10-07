import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { changeNewMessageTextActionCreator, addMessageActionCreator } from "../../redux/state";
const Dialogs = (props) => {

  

    let dialogsElements = props.dialogPage.dialogsData.map(d => <DialogItem name ={d.name} id = {d.id}/>)

    let messagesElement = props.dialogPage.messagesData.map(m => <Message message={m.message} />)


    let textArea = React.createRef();

    let addMessage = () =>{
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = textArea.current.value;
        props.dispatch(changeNewMessageTextActionCreator(text));
    }



    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={css.messages}>
               {messagesElement}
              <div><textarea onChange = {onMessageChange} ref={textArea} value = {props.dialogPage.newMessageText}></textarea></div> 
              <div><button  onClick={addMessage}>send</button></div> 
            </div>


        </div>
    )
}

export default Dialogs;