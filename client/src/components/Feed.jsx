import React, {useState, useEffect, Link} from 'react';
import '../styles/Feed.css'
import Post from './Post';

const Feed = () => {
    return (

        <div className="container">
            <nav className="navbar">
                <div className="icon-container">
                    <a href="" className="profile-icon-container">
                        <img src="./profile.png" alt="profile" />
                    </a>
                    <a href="" className="setting-icon-container">
                        <img src="./settings.png" alt="settings" />
                    </a>
                </div>
                <dev className="search_container">

                    <input type="text" placeholder='Search' />
                </dev>
            </nav>
            <div className="canva-container">
                <div className="create-post-conatiner"></div> 
                    <Post/> {/* Al rededor de el componente Post se va a insertar el post container */}
            </div>
        </div>
    );

}

export default Feed