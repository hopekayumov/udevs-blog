import React from 'react';
import PostHeader from "./post-header/post-header";
import PostContent from "./post-content/post-content";
import Footer from "../footer/footer";

const Post = () => {
    return (
        <>
            <PostHeader></PostHeader>
            <PostContent></PostContent>
            <Footer></Footer>
        </>
    );
};

export default Post;