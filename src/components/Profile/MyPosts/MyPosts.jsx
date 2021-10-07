import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, changeNewPostTextActionCreator } from "../../../redux/state";





const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.changeNewPostText(text)
        props.dispatch(changeNewPostTextActionCreator(text))
    }



    let postsElements = props.postData.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <div>

                <div className={css.MyPosts}>
                    My posts
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={props.postData.newPostText} /></div>
                    <div><button onClick={addPost}>Add post</button></div>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;