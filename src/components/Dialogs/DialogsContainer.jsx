import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { changeNewMessageTextActionCreator, addMessageActionCreator } from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
       
        
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;