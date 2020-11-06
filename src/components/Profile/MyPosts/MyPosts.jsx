import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return <div className={s.content}>
    <div className={s.backImg}>

      My post
      <div className={s.item}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  </div>
}

export default MyPosts;