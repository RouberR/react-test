import React from "react";
import Preloader from "../../img/Preloader/Preloader";
import css from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    if(!props.profile){
      return <Preloader />
    }


  return (
    <div>
      {/* <div className={css.content}><img src="https://cdn2.channelpro.co.uk/sites/channelpro/files/2019/03/global_network.jpg" /></div> */}
      <div className={css.info}>

      <h4>{props.profile.aboutMe}</h4>

      <img src={props.profile.photos.large}/>
      <h3>{props.profile.fullName}</h3>

      <p>{props.profile.contacts.vk}</p>
      <p>{props.profile.contacts.instagram}</p>
      <p>{props.profile.contacts.github}</p>
      <p> {props.profile.contacts.youtube}</p>
      <p>{props.profile.contacts.twitter}</p>

      <h4>{props.profile.lookingForAJobDescription} </h4>
        ava + discripchen
      </div>
    </div>
  )
}

export default ProfileInfo;
