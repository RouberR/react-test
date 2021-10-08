import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";


let derucers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogReducer
})

let store = createStore(derucers);


export default store;