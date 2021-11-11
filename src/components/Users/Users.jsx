import React from "react";
import css from "./Users.module.css";
import userPhoto from "../img/ani.png";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";


let Users = (props) => {




  return (
    <div>
      <Paginator 
      totalUsersCount={props.totalUsersCount}
       pageSize={props.pageSize} 
       currentPage={props.currentPage}
        onPageChange={props.onPageChange}
          
        />

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={css.userPhoto}
                  alt="photos"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  {" "}
                  UNFOLLOW{" "}
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div> */}
              {/* <div>{u.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
