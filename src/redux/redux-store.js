import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogReducer,
    usersPage : usersReducer
})

let store = createStore(reducers);


window.store = store;

export default store;