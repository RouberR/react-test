const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
  _state: {
    dialogPage: {
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
    },
    profilePage: {
      postData: [{
          id: 0,
          message: 'How are you?',
          likesCount: 22
        },
        {
          id: 1,
          message: "I'm good!",
          likesCount: 1
        },
        {
          id: 2,
          message: "How",
          likesCount: 1
        }
      ],
      newPostText: 'Hi Rouber '
    }
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._state.profilePage.postData.push({
        id: 3,
        message: this._state.profilePage.newPostText,
        LikesCount: 0
      });
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      this._state.dialogPage.messagesData.push({
        id: 3,
        message: this._state.dialogPage.newMessageText,
      })
      this._state.dialogPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  }

};

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const changeNewPostTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    text: text
  };
};

export const changeNewMessageTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    text: text
  }
}

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})



export default store;