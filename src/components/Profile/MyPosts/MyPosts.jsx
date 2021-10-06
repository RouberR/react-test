import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

  

    let postsElements = props.postData.map(p => <Post message = {p.message} likesCount = {p.likesCount} /> )

    return (
        <div>
            <div>

                <div className={css.MyPosts}>
                    My posts
                    <div><textarea ref={newPostElement}></textarea></div>
                    <div><button onClick={ addPost}>Add post</button></div>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;