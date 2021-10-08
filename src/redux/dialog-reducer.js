const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


let init = {
        dialogsData: [{
            id: 0,
            name: 'Rouber'
          },
          {
            id: 1,
            name: 'Evgen'
          },
          {
            id: 2,
            name: 'Fid'
          }
        ],
        messagesData: [{
            id: 0,
            message: 'Hi'
          },
          {
            id: 1,
            message: 'How are you?'
          }
        ],
        newMessageText: 'Hi '
      }


const dialogReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesData.push({
                id: 3,
                message: state.newMessageText,
            })
            state.newMessageText = '';
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }

}


export const changeNewMessageTextActionCreator = (text) => {
    return {
      type: CHANGE_NEW_MESSAGE_TEXT,
      text: text
    }
  }
  
  export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
  })
  
export default dialogReducer;