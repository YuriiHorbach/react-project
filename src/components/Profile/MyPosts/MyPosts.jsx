import React from 'react';
import s from './MyPosts.module.css';
// import MyPosts from './MyPosts/MyPosts';


const MyPosts = () => {
  return <div className={s.content}>
    <div className={s.backImg}>

      My post
      <div className={s.item}>
        post 1
      </div>
      <div className={s.item}>
        post 2
      </div>
    </div>
  </div>
}

export default MyPosts;