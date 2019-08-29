import React, { useEffect, useState, KeyboardEvent } from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase from '../../Firebase';
import Styles from './Sign.module.css';
import Input from '../elements/iNput';
import Ibutton from '../elements/Ibutton';
import Pattern from '../elements/Pattern';
import {
  SignType,
  Credentials,
  GoogleFirebaseUserAuthCredentials,
} from '../../interfaces';

const Sign: React.FC<SignType> = ({ signUp }: SignType): JSX.Element => {
  const [isSignedIn, setSignIn] = useState(false);
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: '',
  });
  const signUserIn = (signInCredentials: Credentials): void => {
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
  const signUserUp = (signUpCredentials: Credentials): void => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        signUpCredentials.email,
        signUpCredentials.password,
      )
      .then(() => {
        setSignIn(true);
      });
  };
  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.preventDefault();
    signUp ? signUserUp(emailAndPassword) : signUserIn(emailAndPassword);
  };

  const handleSubmitFromGoogle = (
    event: KeyboardEvent<HTMLInputElement>,
  ): void => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result: GoogleFirebaseUserAuthCredentials) => {
        // const token = result.credential.accessToken;
        // const user = result.user;
      });
  };

  const handleInput = (event: KeyboardEvent<HTMLInputElement>): Credentials => {
    return {
      ...emailAndPassword,
      [event.currentTarget.name]: event.currentTarget.value,
    };
  };

  firebase.auth().onAuthStateChanged((user: any) => {
    if (user) {
      setSignIn(true);
    }
  });
  useEffect(() => {
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
            onInput={(e: KeyboardEvent<HTMLInputElement>): void =>
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
            onInput={(e: KeyboardEvent<HTMLInputElement>): void =>
              setEmailAndPassword({
                ...emailAndPassword,
                ...handleInput(e),
              })
            }
          />
          <Ibutton
            full={true}
            onClick={(e: KeyboardEvent<HTMLInputElement>): void =>
              handleSubmit(e)
            }
          >
            {signUp ? 'Sign Up' : 'Login'}
          </Ibutton>
        </form>
        <p>or</p>
        <Ibutton
          light={true}
          className={Styles.google}
          onClick={(e: KeyboardEvent<HTMLInputElement>): void =>
            handleSubmitFromGoogle(e)
          }
        >
          <img src="/assets/images/google.svg" alt="google" />
          <span>{signUp ? 'Sign Up' : 'Login'}</span>
        </Ibutton>

        <p className={Styles.noaccount}>
          {signUp ? (
            <>
              Already Have an account have an account?{' '}
              <Link to="/signin">Sign In</Link>
            </>
          ) : (
            <>
              Don't have an account? <Link to="/">Register</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Sign;
