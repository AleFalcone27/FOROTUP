import React, { useState, useEffect } from 'react';
import '../styles/PostCards.css'
import { Link } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:5000';

const PostCards = () => {

    const [postsCards, setPostsCards] = useState([]);

    useEffect(() => {
        fetchPostsCards();
    }, []);

    const fetchPostsCards = async () => {
        try {
            const response = await fetch(`${API_URL}/feed`);
            const jsonData = await response.json();
            setPostsCards(jsonData);
            if (Array.isArray(jsonData)) {
                setPostsCards(jsonData);
            } else {
                console.error('Data is not an array:', jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='post-container'>
            {postsCards.map(post => (
                <SinglePost key={post._id} post={post} />
            ))}
        </div>
    );
}

const SinglePost = ({ post }) => (
    <Link to={`/post/${post._id}`} className="post-link">
        <div className="post">
            <div className="post-inner-container">
                <div key={post._id}>
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
    </Link>
);


export default PostCards;