import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import DialogesContainer from "./components/Dialoges/DialogesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Route path='/dialoges' render={() =><DialogesContainer  />}  />
          <Route path='/profile/:userId?' render={()=> <ProfileContainer  /> }  />
          <Route path='/users' render={()=> <UsersContainer /> }  />
          <Route path='/login' render={()=> <Login /> }  />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
