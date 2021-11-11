import React, { Suspense } from "react";
import './App.css';

import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/SettingsMenu/Settings"));
const News = React.lazy(() => import("./components/News/News"));




const App = (props) => {
  


  return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer store = {props.store} />} />
          <Route path='/dialogs' render={ () => <DialogsContainer store = {props.store} /> } />
          <Suspense fallback={<div>Загрузка...</div>}>
              <Route path='/news' render={() => <News/> }/>
              <Route path='/music' render={() => <Music/>}/>
              <Route path='/settings' render={() => <Settings/>}/>
          </Suspense>
          <Route path='/users' render={() => <UsersConteiner/>} />
          <Route path='/login' render={() => <Login/>} />
        </div>

      </div>

  );
}




export default App;
