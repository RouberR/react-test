import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

   



    let dialogsElements = props.dialogsData.dialogsData.map(d => <DialogItem name ={d.name} id = {d.id}/>)

    let messagesElement = props.dialogsData.messagesData.map(m => <Message message={m.message} />)


    let textArea = React.createRef();

    let addMessage = () =>{
        let text = textArea.current.value;
        alert(text);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={css.messages}>
               {messagesElement}
              <div><textarea ref={textArea}></textarea></div> 
              <div><button onClick={addMessage}>send</button></div> 
            </div>


        </div>
    )
}

export default Dialogs;