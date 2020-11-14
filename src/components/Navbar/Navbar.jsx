import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            {/*<a href="/profile">Profile</a>*/}
            <NavLink to="/profile" activeClassName = {s.activeLink}>Profile</NavLink>
            {/*замінюємо тег а на тег NavLink*/}
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName = {s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName = {s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName = {s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/setings" activeClassName = {s.activeLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;