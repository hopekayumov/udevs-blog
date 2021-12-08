import React from 'react';
import './content-news-item.css'
import SigaretteHand from "./img/sigarette-hand.png";
import Views from './img/views.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function ContentNewsItem({title, id, img}) {
    return (
        <div className='content-news__item'>
            <Link to={`/post/${id}`}>
                <img src={img} className='content-news__img' alt="firebase img"/>
            </Link>
            <article className='content-news__item--properties'>
                <span className='content-news__item--time'>18:26 11.01.2021</span>
                <img src={Views} className='content-news__item--views-logo' alt="Views svg"/>
                <span className='content-news__item--views'>365</span>
            </article>
            <Link to={`/post/${id}`} className='content-news__item--text'>{title}</Link>

        </div>
    );
}
