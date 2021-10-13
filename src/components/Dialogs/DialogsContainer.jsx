import React from "react";
import { connect } from "react-redux";
import { changeNewMessageTextActionCreator, addMessageActionCreator } from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessageText: (text) => {
            dispatch(changeNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;