import React, { useState } from 'react';
import '../Login/Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfigue';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [user, setUser] = useState({
        isSignedIn : false,
        name: '',
        email: '',
        photo: ''
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                console.log(signedInUser);
                // var credential = result.credential;
                // var token = credential.accessToken;
                // var user = result.user;
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage);
            });
    }
    const googleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: ''
            }
            setUser(signedOutUser);
        })
        .catch(err => {

        })
    }
    //email and password authentication
    const handleSubmit = () => {

    }
    return (
        <div className="login__page">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="login__form">
                <input type="email" placeholder="Enter Email" name="email" required />
                <input type="password" placeholder="Enter Password" name="password" required />
                <input type="submit" value="Login"/>
                <input type="submit" value="Create Account"/>
                {
                user.isSignedIn ? <button onClick={googleSignOut}>Sign Out</button> :
                <button onClick={googleSignIn}>Continue With Google</button>
                }
                {
                user.isSignedIn && 
                <div>
                    <p>Welcome {user.name}</p>
                    <img src={user.photo} alt=""/>
                </div>        
                }
            </form>
        </div>
    );
};

export default Login;