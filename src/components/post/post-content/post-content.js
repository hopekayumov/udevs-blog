import React, {useEffect, useState} from 'react';
import PostAside from "../post-aside/post-aside";
import './post-content.css'
import Eye from './img/eye.png'
import HeroImg from './img/hero-img.png'
import PostProfile from "../post-profie/post-profile";
import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

const PostContent = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    const postsCollectionRef = collection(db, "posts")

    useEffect(() => {
        const getPosts = async (id) => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPosts(id)
    }, [])

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
                    {posts.map((post) => {
                        if (post.id === id) {
                            return (
                                <div>
                                    <h1 className="main-post-text__title">{post.title}</h1>
                                    <p className="main-post-text__body">{post.descr}</p>
                                </div>
                            );
                        }
                    })}

                </div>
            </div>

            <PostAside></PostAside>
        </div>
    );
};

export default PostContent;