import React, { useEffect, useState } from 'react';
import firebase from '../../Firebase';
import { LOG_USER_IN } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SignType, UserStates } from '../../interfaces';
import Sign from '../Sign';
import Shell from '../Shell';
import Loading from '../elements/Loading';

const Routes: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: UserStates) => state);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        dispatch({ type: LOG_USER_IN });
      }
      setLoaded(true);
    });
  }, [dispatch]);

  return isLoaded ? (
    <>
      {!isLoggedIn ? (
        <>
          <Switch>
            <Route
              path="/signin"
              exact={true}
              render={(props: SignType): React.ReactElement => (
                <Sign {...props} />
              )}
            />
            <Route
              path="/"
              exact={true}
              render={(props: SignType): React.ReactElement => (
                <Sign {...props} signUp={true} />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route
              path="/notes"
              exact={true}
              render={(props: any): React.ReactElement => (
                <Shell {...props} notes={true} />
              )}
            />
            <Route
              path="/edit"
              exact={true}
              render={(props: any): React.ReactElement => (
                <Shell {...props} edit={true} />
              )}
            />
              <Route
              path="/new"
              exact={true}
              render={(props: any): React.ReactElement => (
                <Shell {...props} edit={true} />
              )}
            />
            <Route
              path="/signin"
              exact={true}
              render={(props: SignType): React.ReactElement => (
                <Sign {...props} />
              )}
            />
            <Route
              path="/"
              exact={true}
              render={(props: SignType): React.ReactElement => (
                <Sign {...props} signUp={true} />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </>
      )}
    </>
  ) : (
    <Loading />
  );
};
export default Routes;
