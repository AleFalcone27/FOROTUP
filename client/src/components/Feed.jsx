import React, { useState, useEffect, Link } from 'react';
import '../styles/Feed.css'
import PostCards from './PostCards';
import Navbar from './Navbar';

const Feed = () => {
    return (
        <div className="container">
            <Navbar/>
            <div className="canva-container">
                <div className="create-post-conatiner"></div>
                <PostCards /> {/* Al rededor de el componente Post se va a insertar el post container */}
            </div>
        </div>
    );
}

export default Feed