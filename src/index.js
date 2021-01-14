import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state}
                 addPost = {store.addPost.bind(store)}
                 updateNewPostText = {store.updateNewPostText}
                 updateNewDialogMessage={store.updateNewDialogMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
