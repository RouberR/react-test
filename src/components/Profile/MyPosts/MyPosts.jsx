import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message = "How are you?" likes = "likes 22"/>
            <Post message = "I'm good!" likes = "likes 11"/>
        </div>
    </div>
}

export default MyPosts;