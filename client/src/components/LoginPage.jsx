import React, {useState, useEffect} from 'react';
import '../styles/LoginPage.css'

const API_URL = 'http://127.0.0.1:5000';

const Navbar = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch(`${API_URL}/`).then(
            res => res.json()
        ).then(
            data => {
                setData(data);
                console.log(data)
            }
        )
    },[]);

    return (
        <nav className='login-page'>
            <div className='container'>

                <div className='section-login'>
                    <div className='login-container'>

                        <h2> INICIA CESIÓN </h2>
                        <input className='input-email' type="text" placeholder='Email'/>
                        <input className='input-pass' type="text" placeholder='Password' />
                        <div className='btn-container' >
                            <input type="button" value="INGRESAR" />
                            <input type="button" value="REGISTRARSE" />  
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

export default Navbar;