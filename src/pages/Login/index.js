import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import './style.css';
import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';
import api from "../../services/api";

export default function Login() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    let navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        console.log('login');

        const data = {
            username,
            password
        }

        try {
            const response = await api.post('auth/signin', data);
            
            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.accessToken);

            return navigate ('/books');
        }
        catch(e) {
            alert('Login failed!', e.message);
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Logo" />
                <form onSubmit={login}>
                    <h1>Access your account</h1>
                    <input 
                        type="text" 
                        placeholder="username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value) }
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
            <img src={padlock} alt="Login" />
        </div>
    );
}