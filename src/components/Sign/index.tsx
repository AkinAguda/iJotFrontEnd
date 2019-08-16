import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import Styles from './Sign.module.css';
import Input from '../elements/iNput';
import Ibutton from '../elements/Ibutton';
import Home from '../Home';
import { Users } from '../../interfaces';

const Sign: React.FC = (): JSX.Element => (
  <div className={Styles.container}>
    <div className={Styles.main}>
      <img src="/assets/images/logo.svg" alt="logo" />
      <form>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Ibutton full={true}>Login</Ibutton>
      </form>
      <p>or</p>
      <Ibutton light={true} className={Styles.google}>
        <img src="/assets/images/google.svg" alt="google" />
        <span>Login</span>
      </Ibutton>
      <p className={Styles.noaccount}>
        Don't have an account? <a>Register</a>
      </p>
    </div>
  </div>
);

export default Sign;
