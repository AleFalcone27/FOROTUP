import React, { useState, useEffect } from 'react';
import '../styles/Post.css'

const Post = () => {

    return (

        <div className="post">

            <div className="post-inner-container">

                <div className="post-title-container">
                    <p className="post-title">
                        Alguien sabe que carajos paso con los paninis del buffet
                    </p>
                </div>

                <div className="post-description-container">
                    <p className="post-despcription">
                        Alguien sabe que carajos paso con los paninis del buffetAlguien sabe que carajos paso con los paninis del buffetAlguien sabe que carajos paso con los paninis del buffet
                    </p>
                </div>

                <div className="icon-bar">

                    <div className="like-container">
                        <button type="button" class="like-btn">
                            <img src="../like.png" alt="Like"></img>
                        </button>
                    </div>

                    <div className="comment-container">
                        <button type="button" class="comment-btn">
                            <img src="../comment.png" alt="Comment"></img>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Post;