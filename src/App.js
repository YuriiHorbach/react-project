import React from 'react';
import logo from './logo.svg';
import './App.css';
import Technologies from './Technologies.js';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header /> 
        <Navbar />
        <div class ="app-wrapper-content">
          <Route path='/dialogs' render = { () => (<Dialogs dialogs = {props.state.messagesPage.dialogs} messages = {props.state.messagesPage.messages} />)}/>
          <Route path='/profile' render={ () => <Profile posts = {props.state.profilePage.posts}/> }/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
