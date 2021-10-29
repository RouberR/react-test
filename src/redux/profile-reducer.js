import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let init = {
  postData: [
    {
      id: 0,
      message: "How are you?",
      likesCount: 22,
    },
    {
      id: 1,
      message: "I'm good!",
      likesCount: 1,
    },
    {
      id: 2,
      message: "How",
      likesCount: 1,
    },
  ],
  newPostText: "Hi Rouber ",
  profile: null,
  status: "",
};

const profileReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_POST: {
      let body = state.newPostText;
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, { id: 3, message: body, likesCount: 0 }],
      };
    }
    case CHANGE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};



export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resulCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const changeNewPostTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    text: text,
  };
};

export default profileReducer;
