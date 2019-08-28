import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../Firebase';
import Ibutton from '../elements/Ibutton';
import Styles from './index.module.css';

const Header: React.FC = (): JSX.Element => {
  const [signOutTriggered, triggerSignOut] = useState(false);
  const signUserOut = event => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        triggerSignOut(true);
      });
  };
  return signOutTriggered ? (
    <Redirect from="/notes" to="/" />
  ) : (
    <header>
      <div className={Styles.header}>
        <img src="assets/images/logo.svg" alt="logo" />
        <Ibutton sign={true} onClick={e => signUserOut(e)}>
          Sign Out
        </Ibutton>
      </div>
    </header>
  );
};
export default Header;
