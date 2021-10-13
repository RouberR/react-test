import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, changeNewPostTextActionCreator } from "../../../redux/profile-reducer";





const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.changeNewPostText(text)
    }

    let state = props.profilePage;

    let postsElements = state.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <div>

                <div className={css.MyPosts}>
                    My posts
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={state.newPostText} /></div>
                    <div><button onClick={addPost}>Add post</button></div>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;