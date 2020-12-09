import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {message: "Cool. I understand react", like: 34},
            {message: "Me too.", like: 100},
            {message: "I am a programmer", like: 15},
            {message: "srakadoshka", like: 1500}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'By'}
        ],

        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Petro'},
            {id: 3, name: 'Boris'}
        ]
    }


}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;