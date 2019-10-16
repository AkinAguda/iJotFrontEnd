import React, { useState, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_USER_IN } from '../../reducer/actions';
import { Redirect, Link } from 'react-router-dom';
import { UserStates } from '../../interfaces';
import firebase from '../../Firebase';
import Styles from './Sign.module.css';
import Input from '../elements/iNput';
import Ibutton from '../elements/Ibutton';
import Pattern from '../elements/Pattern';
// import { Notes } from '../../utils/indexedDB';
import {
  SignType,
  Credentials,
  GoogleFirebaseUserAuthCredentials,
} from '../../interfaces';

// interface UserDatabase extends Dexie {
//   appUser?: Dexie.Table<{ id: string; notes: Notes }, number>;
// }

const Sign: React.FC<SignType> = ({ signUp }: SignType): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: UserStates) => state);
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingWithGoogle, setisLoadingWithGoogle] = useState(false);
  const signUserIn = (signInCredentials: Credentials): void => {
    setisLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(
        signInCredentials.email,
        signInCredentials.password,
      )
      .then((user: firebase.auth.UserCredential) => {
        const {
          user: { uid },
        } = user;
        setisLoading(false);
        dispatch({ type: LOG_USER_IN, payload: uid });
        // // const database = IndexedDb('userDb', ['id', 'notes']);
        // database.put(uid, {});
        // database.getNotes(uid).then(res => console.log(res));
        // db.appUser.put({id: uid, notes: {}})
        // db.appUser.put({ id: uid, notes: [] }).then(() => {
        //   console.log('done');
        // });
      })
      .catch(() => {
        setisLoading(false);
      });
  };
  const signUserUp = (signUpCredentials: Credentials): void => {
    setisLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        signUpCredentials.email,
        signUpCredentials.password,
      )
      .then(() => {
        setisLoading(false);
        dispatch({ type: LOG_USER_IN });
      })
      .catch(() => {
        setisLoading(false);
      });
  };
  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.preventDefault();
    signUp ? signUserUp(emailAndPassword) : signUserIn(emailAndPassword);
  };

  const handleSubmitFromGoogle = (
    event: KeyboardEvent<HTMLInputElement>,
  ): void => {
    setisLoadingWithGoogle(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result: GoogleFirebaseUserAuthCredentials) => {
        setisLoadingWithGoogle(false);
        // const token = result.credential.accessToken;
        // const user = result.user;
      })
      .catch(() => {
        setisLoadingWithGoogle(false);
      });
  };

  const handleInput = (event: KeyboardEvent<HTMLInputElement>): Credentials => {
    return {
      ...emailAndPassword,
      [event.currentTarget.name]: event.currentTarget.value,
    };
  };

  return isLoggedIn ? (
    <Redirect from="/" to="/notes" />
  ) : (
    <div className={Styles.container}>
      <Pattern />
      <div className={Styles.main}>
        <img src="/assets/images/logo.svg" alt="logo" />
        <form>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            onInput={(e: KeyboardEvent<HTMLInputElement>): void =>
              setEmailAndPassword({
                ...emailAndPassword,
                ...handleInput(e),
              })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onInput={(e: KeyboardEvent<HTMLInputElement>): void =>
              setEmailAndPassword({
                ...emailAndPassword,
                ...handleInput(e),
              })
            }
          />
          <Ibutton
            full={true}
            onClick={(e: KeyboardEvent<HTMLInputElement>): void =>
              handleSubmit(e)
            }
            loading={isLoading}
          >
            {signUp ? 'Sign Up' : 'Login'}
          </Ibutton>
        </form>
        <p>or</p>
        <Ibutton
          light={true}
          className={Styles.google}
          onClick={(e: KeyboardEvent<HTMLInputElement>): void =>
            handleSubmitFromGoogle(e)
          }
          loading={isLoadingWithGoogle}
        >
          <img src="/assets/images/google.svg" alt="google" />
          <span>{signUp ? 'Sign Up' : 'Login'}</span>
        </Ibutton>

        <p className={Styles.noaccount}>
          {signUp ? (
            <>
              Already Have an account have an account?{' '}
              <Link to="/signin">Sign In</Link>
            </>
          ) : (
            <>
              Don't have an account? <Link to="/">Register</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Sign;
