import React, {useState, useEffect, Link} from 'react';
import '../styles/RegisterPage.css'

const API_URL = 'http://127.0.0.1:5000';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {

        if (email !== null && email !== "" &&
        username !== null && username !== "" &&
        password !== null && password !== ""){

            e.preventDefault();
            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password,username }) // agregar los demas datos de registro 
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data); 
                } else {
                    console.error('Error al enviar los datos');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        else {
            alert('credenciales incorrectas')
        }
    };
        

    return (
        <nav className='login-page'>
            <div className='container'>

                <div className='section-login'>
                    <div className='login-container'>

                        <h2> REGISTRATE </h2>
                        <input 
                        className='input' 
                        type="text" 
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                        className='input1' 
                        type="text" 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                        className='input' 
                        type="text" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                         />
                        <div className='btn-container' >
                            <a href="/">
                                <input 
                                    type="button" 
                                    value="INGRESAR"
                                />
                            </a>
                             <input 
                                type="button" 
                                value="REGISTRARSE"  
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>

                    <div className='section-aside'>
                        <h3>  </h3>
                    </div>
            </div>
        </nav>
    );
}

export default Register;