import React from 'react';
import css from './Users.module.css';

let Users = (props) => {
    return <div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={css.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button> :
                                  <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>

            </span>
        </div>)
    }
    </div>
}

export default Users;