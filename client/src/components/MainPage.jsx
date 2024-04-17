import React, {useState, useEffect, Link} from 'react';
import '../styles/MainPage.css'
import LogIn from './LoginPage';

const Main = () => {

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

            <div className="canva">



            </div>

        </div>

    );

}

export default Main