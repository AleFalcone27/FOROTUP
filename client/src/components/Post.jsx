import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Post.css'

const API_URL = 'http://127.0.0.1:5000';

const Post = () => {

    const [post, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const location = useLocation().pathname;
    const lastSlashIndex = location.lastIndexOf('/');
    const postId = location.substring(lastSlashIndex + 1);


    const fetchPosts = async () => {
        try {
            const response = await fetch(`${API_URL}/post/${postId}`);
            const jsonData = await response.json();
            setPosts(JSON.parse(jsonData.Post));
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    /*
    title': 'Que materia pene Investigacion operativa', 
    'description': 'Ojala la saquen del programa', 
    'author': 'Ale Falcone', 
    'score': 0, 
    'comments': [], 
    'upvotes': 0, 
    'downvotes': 0, 
    'created_at': datetime.datetime(2024, 4, 17, 16, 32, 13, 29000)}
    */

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return `${formattedDate} ${formattedTime}`;
    }




    return (
        <div>
            <Navbar> </Navbar>
            <div className='father-container' >
                <div className='main-post-container'>
                    <div className='body-container' >
                        <div className='author-container'>
                            <h1>{post.author}</h1>
                        </div>
                        <div className='title-container'>
                            <h2>{post.title}</h2>
                        </div>
                        <div className='description-container'>
                            <p>{post.description}</p>
                        </div>
                    </div>

                    <div className='side-container' >
                        <div className="upvote-container">
                            <p> 45 </p>
                            <img src="../upvote.png" alt="upvotes" />
                        </div>
                        <div className="downvote-container">
                            {post.downvotes}
                            <img src="../downvote.png" alt="downvotes" />
                        </div>

                        <div className="date-container">
                            <p>{post.created_at && formatDate(post.created_at['$date'])}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );

}
export default Post;