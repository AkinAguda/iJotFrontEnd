import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../Firebase';
import { UserInfo } from 'firebase';
import Styles from './Sign.module.css';
import Input from '../elements/iNput';
import Ibutton from '../elements/Ibutton';
import Pattern from '../elements/Pattern';
// import Home from '../Home';
import { SignType } from '../../interfaces';

// tslint:disable-next-line: typedef
type credentials = {
  email: string;
  password: string;
};

const Sign: React.FC<SignType> = ({ signUp }): JSX.Element => {
  const [isSignedIn, setSignIn] = useState(false);
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: '',
  });
  console.log(emailAndPassword);
  const signUserIn = (signInCredentials: credentials) => {
    console.log('here');
    firebase
      .auth()
      .signInWithEmailAndPassword(
        signInCredentials.email,
        signInCredentials.password,
      )
      .then(() => {
        setSignIn(true);
      });
  };
  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    signUserIn(emailAndPassword);
  };
  const handleInput = event => {
    console.log(event.target.name);
    return { [event.target.name]: event.target.value };
  };

  firebase.auth().onAuthStateChanged((user: any) => {
    if (user) {
      setSignIn(true);
    }
  });
  useEffect(() => {
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setSignIn(true);
      }
    });
  });
  return isSignedIn ? (
    <Redirect from="/" to="/notes" />
  ) : (
    <div className={Styles.container}>
      <Pattern />
      <div className={Styles.main}>
        <img src="/assets/images/logo.svg" alt="logo" />
        <form>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            onInput={e =>
              setEmailAndPassword({
                ...emailAndPassword,
                ...handleInput(e),
              })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onInput={e =>
              setEmailAndPassword({
                ...emailAndPassword,
                ...handleInput(e),
              })
            }
          />
          <Ibutton full={true} onClick={e => handleSubmit(e)}>
            {signUp ? 'Sign Up' : 'Login'}
          </Ibutton>
        </form>
        <p>or</p>
        <Ibutton
          light={true}
          className={Styles.google}
          onClick={e => handleSubmit(e)}
        >
          <img src="/assets/images/google.svg" alt="google" />
          <span>{signUp ? 'Sign Up' : 'Login'}</span>
        </Ibutton>

        <p className={Styles.noaccount}>
          {signUp ? (
            <>
              Already Have an account have an account?
              <a href="/">Sign In</a>
            </>
          ) : (
            <>
              Don't have an account? <a href="/">Register</a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Sign;
