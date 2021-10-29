import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { compose } from "redux";
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




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;