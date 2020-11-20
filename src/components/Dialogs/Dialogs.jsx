import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.dialogActive}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

let dialogs = [
    { id: 1, name: 'user01'},
    { id: 2, name: 'user02'},
    { id: 3, name: 'user03'},
    { id: 4, name: 'user04'},
    { id: 5, name: 'user05'}
];

let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'Hello'},
    { id: 3, message: 'By'}
];

let dialogElements = dialogs.map((d)=><DialogItem name={d.name} id={d.id}/>)
let messageElements  = messages.map((m)=><Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;