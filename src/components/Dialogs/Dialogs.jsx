import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.dialogActive}>user01</div>
                <div className={s.dialog}>user02</div>
                <div className={s.dialog}>user03</div>
                <div className={s.dialog}>user04</div>
                <div className={s.dialog}>user05</div>
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