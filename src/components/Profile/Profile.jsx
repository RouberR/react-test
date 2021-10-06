import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return <div>
    <ProfileInfo />
    <MyPosts postData = {props.postData.postData} addPost = {props.addPost} />
  </div>
}

export default Profile;
