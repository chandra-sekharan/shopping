import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
const Login = () =>{
    return (
        <div className='loginfirst'>
        <h5>Login First</h5>
        <Link to="/"><button>Login</button></Link>
        </div>
    );
}
export default Login;