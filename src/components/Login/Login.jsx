import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import logo from '../../logo.PNG';

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;
      history.push('/');
      // ...
    })
    .catch((error) => {
      alert(error.message);
    });

    //firebase
  }

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
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
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

          <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>

        </form>

        <button className='login_registerButton' onClick={register}>Register</button>

      </div>
      
    </div>
  )
}

export default Login;