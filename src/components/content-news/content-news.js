import React, {useState, useEffect,} from 'react';
import './content-news.css'
import ContentNewsItem from "../content-news-item/content-news-item";
import axios from "axios";
import {useParams} from "react-router-dom";
import PostContent from "../post/post-content/post-content";

export default function ContentNews() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts()
    }, [])

    function getPosts() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(({data}) => {
                setPosts(data)
                console.log(data)
            })
            .catch((error) => console.log(error))
    }

    return (
        <section className='content-news'>
            {posts.map((item, id) => (
                <ContentNewsItem key={item.id} title={item.title} id={item.id}></ContentNewsItem>
            ))}

        </section>
    );
}