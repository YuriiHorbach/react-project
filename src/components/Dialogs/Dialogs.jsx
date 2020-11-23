import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

let dialogs = [
    { id: 1, name: 'user01'},
    { id: 2, name: 'user02'},
    { id: 3, name: 'user03'},
    { id: 4, name: 'user04'},
    { id: 5, name: 'user05'}
];

let dialogElements = dialogs.map((d)=><DialogItems name={d.name} id={d.id}/>)


let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'Hello'},
    { id: 3, message: 'By'}
];

let messageElements  = messages.map((m)=><Messages  message={m.message}/>)

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