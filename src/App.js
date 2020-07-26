import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialoges from "./components/Dialoges/Dialoges";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import DialogesContainer from "./components/Dialoges/DialogesContainer";

const App = (props) => {

  
debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Route path='/dialoges' render={() =><DialogesContainer store={props.store} />}  />
          <Route path='/profile' render={()=> <Profile store={props.store} dispatch={props.dispatch} /> }  />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
