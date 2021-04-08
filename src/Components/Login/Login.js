import React from 'react';
import '../Login/Login.css';

const Login = () => {
    return (
        <div className="login__page">
            <h2 className="text-center">Login</h2>
            <form action="#" className="login__form">
                <input type="email" placeholder="Enter Email" name="email" required/>
                <input type="password" placeholder="Enter Password" name="password" required/>
                <button>Login</button>
                <button>Create Account</button>
                <button>Continue With Google</button>
            </form>
        </div>
    );
};

export default Login;