import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/SettingsMenu/Settings";






const App = (props) => {
  


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile profilePage = {props.state.profilePage} dispatch = {props.dispatch} />} />
          <Route path='/dialogs' render={ () => <Dialogs dialogPage={props.state.dialogPage} dispatch = {props.dispatch}/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>


      </div>
    </BrowserRouter>
  );
}




export default App;
