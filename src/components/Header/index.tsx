import React, { KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { LOG_USER_OUT } from '../../reducer/actions';
import firebase from '../../Firebase';
import Ibutton from '../elements/Ibutton';
import Styles from './index.module.css';

const Header: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
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
        <img src="/images/logo.svg" alt="logo" />
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
