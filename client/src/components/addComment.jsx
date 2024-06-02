import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AddComment.css'

const API_URL = 'http://127.0.0.1:5000';

const AddComment = () => {
    const [comment, setComment] = useState('');

    const location = useLocation().pathname;
    const lastSlashIndex = location.lastIndexOf('/');
    const postId = location.substring(lastSlashIndex + 1);

    const handleSubmit = async (e) => {
        console.log(comment);
        try {
            const response = await fetch(`${API_URL}/post/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment })
            });
            if (response.ok) {
                console.log('Comentario realizado correctamente');
                setComment(''); 
            } else {
                console.error('Error al realizar el comentario');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className="add-comment-container" onSubmit={handleSubmit}>
            <textarea
                placeholder="Escribí tu comentario acá..."
                className="comment-textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <input
                type="submit"
                value="Comentar"
                className="comment-submit"
            />
        </form>
    );
}


export default AddComment;