import React, { useState, useEffect, Link } from 'react';
import '../styles/LoginPage.css'

const API_URL = 'http://127.0.0.1:5000';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const data = await response.json();
                var json = JSON.parse(data['Info'])
                localStorage.setItem('username',json.username); 
                console.log(localStorage.getItem('username'));
            } else {
                console.error('Error al enviar los datos');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className='login-page'>
            <div className='container'>
                <div className='section-login'>
                    <div className='login-container'>
                        <h2> INICIA CESIÓN </h2>
                        <input
                            className='input-email'
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='input-pass'
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='btn-container' >
                            <input
                                type="button"
                                value="INGRESAR"
                                onClick={handleSubmit}
                            />
                            <a href="/register">
                                REGISTRARSE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;