import React, { KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_USER_OUT } from '../../reducer/actions';
import { Redirect } from 'react-router-dom';
import { UserStates } from '../../interfaces';
import firebase from '../../Firebase';
import Ibutton from '../elements/Ibutton';
import Styles from './index.module.css';

const Header: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector((state: UserStates) => state);
  const signUserOut = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOG_USER_OUT });
      });
  };
  return (
    <header>
      <div className={Styles.header}>
        <img src="assets/images/logo.svg" alt="logo" />
        <Ibutton
          sign={true}
          onClick={(e: KeyboardEvent<HTMLInputElement>): void => signUserOut(e)}
        >
          Sign Out
        </Ibutton>
      </div>
    </header>
  );
};
export default Header;
