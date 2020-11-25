import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {message:"Cool. I understand react", like:34 },
    {message:"Me too.", like:100 },
    {message:"I am a programmer", like:15 },
    {message:"srakadoshka", like:1500 }
];

let dialogs = [
    { id: 1, name: 'user01'},
    { id: 2, name: 'user02'},
    { id: 3, name: 'user03'},
    { id: 4, name: 'user04'},
    { id: 5, name: 'user05'}
];


let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'Hello'},
    { id: 3, message: 'By'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
