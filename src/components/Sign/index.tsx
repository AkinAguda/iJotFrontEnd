import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledAuth from 'react-firebaseui/StyledFirebaseAuth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
firebase.initializeApp({
  apiKey: 'AIzaSyCbhqu9i5QYQv1dx-xE29vk72CNrfXmBBs',
  authDomain: 'ijot-1da7a.firebaseapp.com',
});
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
  }, []);
  return (
    <div>
      {isSignedIn ? (
        <button onClick={(): any => firebase.auth().signOut()}>Sign Out</button>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};

export default Sign;
