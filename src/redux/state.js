import {renderTree} from '../renderTree';
let state = {
    dialogPage:{
        dialogsData: [
            { id: 0, name: 'Rouber' },
            { id: 1, name: 'Evgen' },
            { id: 2, name: 'Fid' }
          ],
          messagesData: [
            { id: 0, message: 'Hi' },
            { id: 1, message: 'How are you?' }
          ],
    },
    profilePage:{
        postData: [
            {id: 0, message:'How are you?', likesCount: 22},
            {id: 1, message:"I'm good!", likesCount: 1},
            {id: 2, message:"How", likesCount:1}
          ]
    }

  }


 export let addPost = (text) => {
    state.profilePage.postData.push({
      id: 3,
      message: text,
      LikesCount:0
    });
    renderTree(state);
  }

  export default state;