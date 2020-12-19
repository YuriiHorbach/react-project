import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogElements = props.dialogsAll.dialogs.map((d)=><DialogItems name={d.name} id={d.id}/>)
    let messageElements  = props.dialogsAll.messages.map((m)=><Messages  message={m.message}/>)

    let addNewMessage = React.createRef();

    let addNewDialogMessage = () => {
        props.addMessage();
    }

    let onMessageChange = ()=> {
        let text = addNewMessage.current.value;
        props.updateNewDialogMessage(text);
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange}
                          ref={addNewMessage}
                          value={props.newMessageText}>
                </textarea>
                <br/>
                <button onClick={addNewDialogMessage}>Push</button>
            </div>
        </div>
    )
}

export default Dialogs;