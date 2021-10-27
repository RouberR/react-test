import React from "react";
import css from "./Users.module.css";
import userPhoto from "../img/ani.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && css.selectedPage}
              onClick={(e) => {
                props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={css.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}}> UNFOLLOW </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => { props.follow(u.id);}}>FOLLOW</button>
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
