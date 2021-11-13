import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


export type initStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isFetching: boolean,
  isAuth: boolean,
}


let init : initStateType = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = init, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

type setAuthUserDataPayloadType = {
  userId: number, 
  email: string,
   login: string
}
type setAuthUserDataType = {
  type: typeof SET_USER_DATA,
  data: setAuthUserDataPayloadType,
}

export const setAuthUserData = (userId: number, email: string, login: string): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});


export const getAithUserData = () => async (dispatch: any) => {
  const response:any = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export default authReducer;
