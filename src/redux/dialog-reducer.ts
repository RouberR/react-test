const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

type DialogType = {
  id: number,
  name: string
}

type MessageType = {
  id: number,
  message: string
}

let init = {
  dialogsData: [
    {
      id: 0,
      name: "Rouber",
    },
    {
      id: 1,
      name: "Evgen",
    },
    {
      id: 2,
      name: "Fid",
    },
  ] as Array<DialogType>,
  messagesData: [
    {
      id: 0,
      message: "Hi",
    },
    {
      id: 1,
      message: "How are you?",
    }
  ]as Array<MessageType>, 
  newMessageText: "Hi " as string,
};

export type initStateType = typeof init

const dialogReducer = (state = init, action: any) : initStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: 3, message: body }],
      };
    case CHANGE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text,
      };
    default:
      return state;
  }
};
type changeNewMessageTextActionCreatorType = {
  type: typeof CHANGE_NEW_MESSAGE_TEXT,
  text: string,
}
export const changeNewMessageTextActionCreator = (text:string):changeNewMessageTextActionCreatorType => {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    text: text,
  };
};
type addMessageActionCreatorType = {
  type: typeof ADD_MESSAGE,
}
export const addMessageActionCreator = ():addMessageActionCreatorType => ({
  type: ADD_MESSAGE,
});

export default dialogReducer;
