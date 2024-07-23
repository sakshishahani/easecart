import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className="login__logo"
                    src='https://www.pinclipart.com/picdir/middle/10-108329_cart-clip-art-at-clker-com-vector-shopping.png'
                    alt="logo"
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Enter your email"
                    />
                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Enter your password"
                    />
                    <button 
                        type="submit" 
                        className='login__signInButton' 
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the Easecart Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>
                <button 
                    className='login__registerButton' 
                    onClick={register}
                >
                    Create your Easecart account
                </button>
            </div>
        </div>
    );
}

export default Login;
