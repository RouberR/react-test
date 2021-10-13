import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, changeNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";






let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
           dispatch(addPostActionCreator());
        },
        changeNewPostText: (text) => {
            dispatch(changeNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;