import React, { useState } from 'react';
import './styles.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(username, password);
            // Redirect to dashboard or homepage
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div >
          
            <h2>Login</h2>
            <form onSubmit={handleLogin} className='loginss'>
                <label htmlFor="name">Enter your UserName</label>
                <input type="text" placeholder="Username" name='name' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
