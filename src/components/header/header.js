import React from 'react';
import './header.css'
import logo from './img/udevs-logo.svg'
import headerNotification from './img/notifications.svg'
import {Link} from "react-router-dom";

export default function Headers() {
    return (
        <div className='header'>
           <Link to="/">
               <img src={logo} className='header-logo'/>
           </Link>

            <div className='header-reg-panel'>
                <button className='header-notification-btn'>
                    <img src={headerNotification} className='header-notification' alt="notification"/>
                </button>
                <span className='header-notification-count'>1</span>
                <button className='header-login'>Войти</button>
            </div>
        </div>
    );
}