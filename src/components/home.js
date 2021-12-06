import React from 'react';
import Headers from "./header/header";
import Navbar from "./navbar/navbar";
import ContentNews from "./content-news/content-news";
import Footer from "./footer/footer";

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Navbar></Navbar>
            <ContentNews></ContentNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;