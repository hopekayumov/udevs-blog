import React, {useEffect, useState} from 'react';
import PostAside from "../post-aside/post-aside";
import './post-content.css'
import Eye from './img/eye.png'
import HeroImg from './img/hero-img.png'
import PostProfile from "../post-profie/post-profile";
import axios from "axios";
import {useParams} from "react-router-dom";
const PostContent = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        getPosts()
    }, [])

    function getPosts() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(({data}) => {
                setPosts(data)
                console.log(data)
            })
            .catch((error) => console.log(error))
    }
    return (
        <div className="post-content">
            <PostProfile></PostProfile>
            <div className="main-post">
                <img src={HeroImg} className="hero-img" alt="Hero img"/>
                <span className="main-post-author">Фото: Dilorom Alieva</span>
                <div className="main-post-date">
                    <span className="main-post-time">18:26  11.01.2021</span>
                    <img className="main-post-eye" src={Eye} alt="Eye"/>
                    <span className="main-post-views">365</span>
                </div>
                <div className="main-post-text">
                    <h1 className="main-post-text__title">{posts.title}</h1>
                    <p className="main-post-text__body">{posts.body}</p>
                </div>
            </div>

            <PostAside></PostAside>
        </div>
    );
};

export default PostContent;