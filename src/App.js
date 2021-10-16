import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/SettingsMenu/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";






const App = (props) => {
  


  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer store = {props.store} />} />
          <Route path='/dialogs' render={ () => <DialogsContainer store = {props.store} /> } />
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/users' render={() => <UsersConteiner/>} />
        </div>

      </div>

  );
}




export default App;
