import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import StyledAuth from 'react-firebaseui/StyledFirebaseAuth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Style from './Sign.module.css';
const Sign: React.FC = (): any => {
  const [isSignedIn, setSignIn] = useState(false);
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: (): boolean => false,
    },
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setSignIn(!!isSignedIn);
    });
  }, [isSignedIn]);
  return (
    <div className={Style.authPage}>
      {isSignedIn ? (
        <button onClick={(): any => firebase.auth().signOut()}>Sign Out</button>
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
