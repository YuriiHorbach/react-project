let rerenderEntireTree = () => {
    console.log("State changed");
}

let state = {
    profilePage: {
        posts: [
            {message: "Cool. I understand react", like: 34},
            {message: "Me too.", like: 100},
            {message: "I am a programmer", like: 15},
            {message: "srakadoshka", like: 1500}
        ],
        newPostText: 'some interesting text'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'By'}
        ],
        newMessageText: 'new text',

        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Petro'},
            {id: 3, name: 'Boris'}
        ]
    }


}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.messages.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText

    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}



export const updateNewDialogMessage = (newMessage) => {
   state.dialogsPage.newMessageText = newMessage;
   rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}



export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;