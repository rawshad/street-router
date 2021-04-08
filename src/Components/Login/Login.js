import React from 'react';
import '../Login/Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfigue';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                // var credential = result.credential;
                // var token = credential.accessToken;
                // var user = result.user;
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    return (
        <div className="login__page">
            <h2 className="text-center">Login</h2>
            <form action="#" className="login__form">
                <input type="email" placeholder="Enter Email" name="email" required />
                <input type="password" placeholder="Enter Password" name="password" required />
                <button>Login</button>
                <button>Create Account</button>
                <button onClick={googleSignIn}>Continue With Google</button>
            </form>
        </div>
    );
};

export default Login;