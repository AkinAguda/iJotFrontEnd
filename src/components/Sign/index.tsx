import React from 'react';
// import firebase from '../../Firebase';
import Styles from './Sign.module.css';
import Input from '../elements/iNput';
import Ibutton from '../elements/Ibutton';
import Pattern from '../elements/Pattern';
// import Home from '../Home';
import { SignType } from '../../interfaces';

// tslint:disable-next-line: typedef
const Sign: React.FC<SignType> = ({ signUp }): JSX.Element => (
  <div className={Styles.container}>
    <Pattern />
    <div className={Styles.main}>
      <img src="/assets/images/logo.svg" alt="logo" />
      <form>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Ibutton full={true}>{signUp ? 'Sign Up' : 'Login'}</Ibutton>
      </form>
      <p>or</p>
      <Ibutton light={true} className={Styles.google}>
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

export default Sign;
