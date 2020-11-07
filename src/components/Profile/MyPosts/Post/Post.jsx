import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return <div >
    <div className={s.item}>
      message: {props.message}, like-{props.like}
    </div>
  </div>
}

export default Post;