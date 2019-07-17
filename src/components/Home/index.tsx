import React from 'react';
import { Users } from '../../interfaces';
import firebase from '../../Firebase';
import Styles from './Home.module.css';
const Home: React.FC<Users> = (props: Users): JSX.Element => {
  const { name, email } = props;
  return (
    <div className={Styles.container}>
      <div>Welcome {name}</div>
      <div>Your email is {email}</div>
      <button onClick={(): Promise<void> => firebase.auth().signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default Home;
