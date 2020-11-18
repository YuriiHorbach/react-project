import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo />
        <div>
            ava + description
        </div>
        <div>
            <MyPosts/>
        </div>
    </div>
}

export default Profile;