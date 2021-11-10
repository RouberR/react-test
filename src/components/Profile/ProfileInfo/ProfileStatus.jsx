import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onActiveEditMode = () => {
    setEditMode(true);
  };
  const onDeactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={onActiveEditMode}>
            {props.status || "-----"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={onDeactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
