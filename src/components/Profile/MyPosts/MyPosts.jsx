import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return <div className={s.content}>
    <div className={s.backImg}>

      My post
      <div className={s.item}>
        <Post message="Cool. I understand react" like="34" />
        <Post message="Me too." like="15" />
        <Post message="I am a programmer" like="100" />
      </div>
    </div>
  </div>
}

export default MyPosts;