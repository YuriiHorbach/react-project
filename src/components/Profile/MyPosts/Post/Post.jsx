import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return <div >
    <div className={s.item}>
      message: {props.message}
    </div>
    <span>like-{props.like}</span>
  </div>
}

export default Post;