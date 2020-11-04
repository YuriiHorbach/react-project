import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
  return <div className={s.content}>
    <div className={s.backImg}>
    </div>
    <div className="">
      ava + description
    </div>
    <div className="">
      My posts
      <div className={s.item}>
        New post
      </div>
      <div className={s.item}>
        post1
      </div>
      <div className={s.item}>
        post2
      </div>
    </div>
  </div>
}

export default Profile;