import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return <div className={s.content}>
    <div className={s.backImg}>
      <img  src="https://eskipaper.com/images/desktop-wallpaper-6.jpg" alt=""/>
    </div>
    <div className="">
      ava + description
    </div>
    <div >
      <MyPosts />
    </div>
  </div>
}

export default Profile;