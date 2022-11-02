import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import logo from '../../logo.PNG';

function Login() {

  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in 
      history.push('/');
    })
    .catch((error) => {
      alert(error.message);
    });

    //firebase
  }

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      //console.log(userCredential);
      if (userCredential) {
        history.push('/');
      }
    })
    .catch((error) => {
      alert(error.message);
    })
    //firebase
  }

  return (
    <div className='login'>
      <Link to="/">
        <img 
          className='login_logo'
          src={logo}
          alt="logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input type='email' ref={emailRef}/>

          <h5>Password</h5>
          <input type='password' ref={passwordRef}/>

          <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>

        </form>

        <button className='login_registerButton' onClick={register}>Register</button>

      </div>
      
    </div>
  )
}

export default Login;