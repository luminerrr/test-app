import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {clientId, buttonText, onSuccess, onFailure, cookiePolicy, GoogleLogin} from 'react-google-login';

async function doLogin({email, password}){
    const response = await fetch('http://localhost:3001/api/v1/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        }),
    });

    const data = await response.json();
    return data.token;
}



function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token');
    console.log(token)

    useEffect(()=>{
        setIsLoggedIn(!!token);
    }, [token]);

    function handleSubmit(e){
        setIsLoading(true);
        e.preventDefault();
        doLogin({email, password})
        .then((token)=>localStorage.setItem('token',token))
        .catch((err)=>console.log(err))
        .finally(()=>setIsLoading(false));
    };

    function handleLogout(e){
        setIsLoading(true);
        e.preventDefault();
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsLoading(false);
    }

    const responseGoogle = response => {
        console.log(response);
    }

    return(
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className="App-logo" alt='logo' />
                {!isLoggedIn ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e)=> setPassword(e.target.value)}
                            value={password}
                        />
                        <input type="submit" value={isLoading ? "Loading" : "Login"} />
                        <GoogleLogin 
                        clientId="620062844379-tinvb1ulhbbkjrgu7f76q2chuemflqib.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                        />
                    </form>
                ):(
                    <input type="submit" value="logout" onClick={handleLogout} />
                )
                }
            </header>
        </div>
    )
}

export default Login;