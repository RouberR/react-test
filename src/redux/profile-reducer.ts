import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO = "SAVE_PHOTO";


type postDataType = {
  id: number
  message: string
  likesCount: number
}
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
  ] as Array<postDataType>,
  newPostText: "Hi Rouber " as string,
  profile: null as any,
  status: "" as string,
};
type initType = typeof init
const profileReducer = (state = init, action:any): initType => {
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

    case SAVE_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const setUserProfile = (profile: string) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status: string) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos: string) => ({
  type: SAVE_PHOTO,
  photos,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response:any = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId:number) => async (dispatch:any) => {
  let response:any = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status:string) => async (dispatch:any) => {
  let response:any = await profileAPI.updateStatus(status);
  if (response.data.resulCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file:string) => async (dispatch:any) => {
  let response:any = await profileAPI.savePhoto(file);
  if (response.data.resulCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const changeNewPostTextActionCreator = (text:string) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    text: text,
  };
};

export default profileReducer;
