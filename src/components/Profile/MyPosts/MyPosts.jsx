import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.myPosts_posts.posts.map((m)=><Post message={m.message} like={m.like} />);

  let addPost = ()=> {
    alert('Yahoooo');
  }

  return <div className={s.content}>
    <div className={s.backImg}>
      <h3>My post</h3>
      <div className="">
        <textarea>   </textarea>
      </div>
      <div >
        <button onClick={addPost}  >Push</button>
      </div>

      <div className={s.item}>
        {postsElements}
      </div>
    </div>
  </div>
}

export default MyPosts;