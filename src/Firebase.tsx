import * as firebase from 'firebase';
import { fireBaseApiKey, fireBaseAuthDomain } from './keys';
firebase.initializeApp({
  apiKey: fireBaseApiKey,
  authDomain: fireBaseAuthDomain,
});

export default firebase;
