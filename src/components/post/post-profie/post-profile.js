import React from 'react';
import './post-profile.css'
import woman from './img/woman.png'
import saved from './img/saved.png'

const PostProfile = () => {
    return (
        <div className="post-profile">
            <img src={woman} className="post-profile__avatar" alt="woman"/>
            <h1 className="post-profile__name">Dilorom Alieva</h1>
            <div className="post-profile-buttons">
                <button className="post-profile__follow">Follow</button>
                <button className="post-profile__saved">
                    <img src={saved} alt="saved icon" width="10px" height="16px"/>
                </button>
            </div>
        </div>
    );
};

export default PostProfile;