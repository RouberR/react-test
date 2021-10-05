import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 0, message:'How are you?', likesCount: 22},
        {id: 1, message:"I'm good!", likesCount: 1}
    ]

    return (
        <div>
            <div>

                <div className={css.MyPosts}>
                    My posts
                    <div><textarea></textarea></div>
                    <div><button>Add post</button></div>
                </div>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;