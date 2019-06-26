import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Style from './Sign.module.css';
import Home from '../Home';
import { Users } from '../../interfaces';
const Sign: React.FC = (): JSX.Element => {
  const [isSignedIn, setSignIn] = useState(false);
  const [User, updateUser] = useState<Users>({
    Uid: undefined,
    name: undefined,
    email: undefined,
  });
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: (): any => false,
    },
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setSignIn(!!user);
      console.log(user);
      updateUser({
        ...User,
        Uid: user.uid,
        email: user.email,
        name: user.displayName,
      });
    });
  }, []);
  return (
    <div className={Style.authPage}>
      {isSignedIn ? (
        // <button onClick={(): any => firebase.auth().signOut()}>Sign Out</button>
        <Home Uid={User.Uid} email={User.email} name={User.name} />
      ) : (
        <div className={Style.mButton}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
};

export default Sign;
