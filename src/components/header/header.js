import React, {useState} from 'react';
import './header.css'
import logo from './img/udevs-logo.svg'
import headerNotification from './img/notifications.svg'
import {Link} from "react-router-dom";
import User from './img/user.png'
import Cancel from './img/cancel.png'

export default function Headers() {
    const [isOpen, setIsOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAuthorized = localStorage.getItem("isAuthorized")

    function onSubmit (event) {
        event.preventDefault()
        const admin = {
            email: 'umidjon@gmail.com',
            password: '12345'
        }
        if (admin.email === email && admin.password === password) {
            localStorage.setItem("isAuthorized", true)
        }
        else {
            alert('Email or Password incorrect!')
        }
    }
    function logOut () {
        localStorage.removeItem("isAuthorized")
    }
    return (
        <div className='header'>
           <Link to="/">
               <img src={logo} className='header-logo' alt="logo"/>
           </Link>

            <div className='header-reg-panel'>
                <button className='header-notification-btn'>
                    <img src={headerNotification} className='header-notification' alt="notification"/>
                </button>
                <span className='header-notification-count'>1</span>
                {!isAuthorized && (
                    <button className='header-login' onClick={() => setIsOpen(true)}>Войти</button>
                )}
                <div className="user-profile">
                    {isAuthorized && (
                        <button className="user-profile__btn" onClick={() => setProfileOpen(true)}>
                            <img className="user-profile__img" src={User} alt="user profile"/>
                        </button>
                    )}
                    <div className={`user-profile__dash ${profileOpen ? 'visible' : ''}`}>
                        <button className="user-profile__out" onClick={logOut}>Log out</button>
                    </div>
                </div>
                 {/*Modal */}
                <div className={`modal ${isOpen ? 'visible' : ''}`}>
                    <button className="modal-close" onClick={() => setIsOpen(false)}>
                        <img src={Cancel} alt="cancel svg" width="22px" height="22px"/>
                    </button>
                    <h3 className="modal-title">Вход на udevs news</h3>

                    <form className="modal-form" onSubmit={onSubmit}>
                        <input
                            className="modal-email"
                            type="email" name="email"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <input
                            className="modal-password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <button className="modal-submit" type="submit">Войти</button>
                    </form>
                </div>
                {isOpen && <div className="overlay"></div>}
            </div>
        </div>
    );
}