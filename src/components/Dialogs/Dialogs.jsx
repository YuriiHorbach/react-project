import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.dialogActive}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='user01' id='1' />
                <DialogItem name='user02' id='2' />
                <DialogItem name='user03' id='3' />
                <DialogItem name='user04' id='4' />
                <DialogItem name='user05' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='By'/>
            </div>
        </div>
    )
}

export default Dialogs;