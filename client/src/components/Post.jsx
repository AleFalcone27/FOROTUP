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
            } else {
                console.error('Data is not an array:', jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    {/* Al rededor de el componente Post se va a insertar el post container */}
    return ( 
        <div className='post-container'> 
            {posts.map(post => (
                <SinglePost key={post._id} post={post} /> 
            ))}
        </div>
    );
}

const SinglePost = ({ post }) => (
    <div className="post">
        <div className="post-inner-container">
                <div key={post.id}>
                    <div className="post-title-container">
                        <p className="post-title">{post.title}</p>
                    </div>
                    <div className="post-description-container">
                        <p className="post-despcription">{post.description}</p>
                    </div>
                </div>
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
);


export default Post;