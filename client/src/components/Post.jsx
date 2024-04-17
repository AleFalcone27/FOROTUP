import React, { useState, useEffect } from 'react';
import '../styles/Post.css'

const API_URL = 'http://127.0.0.1:5000';

const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/feed`); // Ruta al endpoint en tu servidor Flask
            const jsonData = await response.json();
            setPosts(jsonData);
            console.log(jsonData)
            if (Array.isArray(jsonData)) {
                setPosts(jsonData);
                console.error('is array');
            } else {
                console.error('Data is not an array:', jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="post">
            <div className="post-inner-container">
                {posts.map(post => (
                    <div key={post.id}>
                        <div className="post-title-container">
                            <p className="post-title">{post.title}</p>
                        </div>
                        <div className="post-description-container">
                            <p className="post-despcription">{post.description}</p>
                        </div>
                        <div className="icon-bar">
                            <div className="like-container">
                                <button type="button" className="like-btn">
                                    <img src="../like.png" alt="Like"></img>
                                </button>
                            </div>
                            <div className="comment-container">
                                <button type="button" className="comment-btn">
                                    <img src="../comment.png" alt="Comment"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;