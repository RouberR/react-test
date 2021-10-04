import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import css from './Profile.module.css'


const Profile = () => {
  return <div className={css.content}>
  <div><img src="https://cdn2.channelpro.co.uk/sites/channelpro/files/2019/03/global_network.jpg" /></div>
  <div>
    ava + discripchen
  </div>
  <MyPosts />
</div>
}

export default Profile;
