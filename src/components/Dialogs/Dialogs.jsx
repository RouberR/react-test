import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { changeNewMessageTextActionCreator, addMessageActionCreator } from "../../redux/dialog-reducer";

const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name ={d.name} key = {d.id} id = {d.id}/>)
    let messagesElement = state.messagesData.map(m => <Message message={m.message} key = {m.id} />)
    let newMessageBody = state.newMessageText;


    let textArea = React.createRef();

    let addMessage = () =>{
        props.sendMessage();

    }

    let onMessageChange = () => {
        let text = textArea.current.value;
        props.changeNewMessageText(text);
    }



    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={css.messages}>
               {messagesElement}
              <div><textarea onChange = {onMessageChange} ref={textArea} value = {newMessageBody}></textarea></div> 
              <div><button  onClick={addMessage}>send</button></div> 
            </div>


        </div>
    )
}

export default Dialogs;