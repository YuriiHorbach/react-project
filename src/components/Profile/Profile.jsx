import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

    return <div className={s.content}>
        <div>
            <ProfileInfo/>
            <MyPosts myPosts_posts = {props.profilePage}
                     newPostText = {props.profilePage.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText = {props.updateNewPostText}/>
        </div>
    </div>
}

export default Profile;