import React from "react";
import css from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div className={css.content}><img src="https://cdn2.channelpro.co.uk/sites/channelpro/files/2019/03/global_network.jpg" /></div>
      <div className={css.info}>
        ava + discripchen
      </div>
    </div>
  )
}

export default ProfileInfo;
