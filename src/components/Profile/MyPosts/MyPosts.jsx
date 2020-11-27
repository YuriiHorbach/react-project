import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map((m)=><Post message={m.message} like={m.like} />);


  return <div className={s.content}>
    <div className={s.backImg}>

      My post
      <div className={s.item}>
        {postsElements}
      </div>
    </div>
  </div>
}

export default MyPosts;