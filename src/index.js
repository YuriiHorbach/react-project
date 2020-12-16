import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, subscribe, updateNewPostText} from "./redux/state.js";

let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
