import './header.css'
import logo from './img/udevs-logo.svg'
import headerNotification from './img/notifications.svg'

export default function Headers() {
    return (
        <div className='header'>
            <a href="#">
                <img src={logo} className='header-logo'/>
            </a>

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