import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";


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
    
    
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);
    

   
     
    }
 

};






export default store;