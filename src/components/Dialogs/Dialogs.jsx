import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.dialogActive}>
                    <NavLink to="dialog/1">user01</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialog/2">user02</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialog/3">user03</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialog/4">user04</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialog/5">user05</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>By</div>
            </div>
        </div>
    )
}

export default Dialogs;