import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let messages = [
  {message:"Cool. I understand react", like:34 },
  {message:"Me too.", like:100 },
  {message:"I am a programmer", like:15 },
  {message:"srakadoshka", like:1500 }
];

let messagesElements = messages.map((m)=><Post message={m.message} like={m.like} />);

const MyPosts = () => {
  return <div className={s.content}>
    <div className={s.backImg}>

      My post
      <div className={s.item}>
        {messagesElements}
      </div>
    </div>
  </div>
}

export default MyPosts;