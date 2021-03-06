import css from "./Post.module.css";


const Post = (props) => {
    return <div>
        <div className={css.item}>
            <img src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg" alt="post"/>
            {props.message}
            <div>
                <span className={css.span}>
                   Likes {props.likesCount}
                </span>
            </div>
        </div>
    </div>
}

export default Post;