import React, {useState} from "react";
import Preloader from "../../img/Preloader/Preloader";
import css from "./ProfileInfo.module.css";

const  ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const onClickEditMode = () => {
      setEditMode(!editMode)
    }
    return (
      <div>
        { !editMode &&
          <div>
            <span onDoubleClick={onClickEditMode}>{props.status ||  "-----"}</span>
          </div>
        }
        {editMode && (
          <div>
            <input onBlur={onClickEditMode} autoFocus={true}  />
          </div>
        )}
      </div>
    );
  }


export default ProfileStatus;
