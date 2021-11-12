import React from "react";
import Preloader from "../../img/Preloader/Preloader";
import css from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../img/ani.png";

const ProfileInfo = (props) => {
    if(!props.profile){
      return <Preloader/>
    }

const onMainPhotoSelecter = (e) => {
  if (e.target.files.length){
    props.savePhoto(e.target.files[0])
  }
}
  return (
    <div>
      <div className={css.info}>

      <h4>{props.profile.aboutMe}</h4>

      <img src={props.profile.photos.large || userPhoto} className={css.userPhoto} alt="Photos"/>
     { props.isOwner && <input type={"file"} onChange={onMainPhotoSelecter}/>}
      <h3>{props.profile.fullName}</h3>

      <p>{props.profile.contacts.vk}</p>
      <p>{props.profile.contacts.instagram}</p>
      <p>{props.profile.contacts.github}</p>
      <p> {props.profile.contacts.youtube}</p>
      <p>{props.profile.contacts.twitter}</p>

      <h4>{props.profile.lookingForAJobDescription} </h4>
        ava + discripchen
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
