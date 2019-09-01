import React, { useEffect, useState } from 'react';
import firebase from '../../Firebase';
import { LOG_USER_IN } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { SignType, ProtectedRouteType, UserStates } from '../../interfaces';
import Sign from '../Sign';
import Shell from '../Shell';

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
  }, []);

  const ProtectedRoute = ({
    path,
    component: Component,
    auth,
    exact,
    to,
    ...props
  }: ProtectedRouteType): React.ReactElement =>
    auth ? (
      <Route
        path={path}
        exact={!!exact}
        render={(): any => <Component {...props} />}
      />
    ) : (
      <Redirect to={to || '/signin'} />
    );

  return isLoaded ? (
    <>
      <Route
        path="/"
        exact={true}
        render={(props: SignType): React.ReactElement => (
          <Sign {...props} signUp={true} />
        )}
      />
      <Route
        path="/signin"
        exact={true}
        render={(props: SignType): React.ReactElement => <Sign {...props} />}
      />
      <ProtectedRoute
        path="/notes"
        auth={isLoggedIn}
        exact={true}
        component={Shell}
        notes={true}
      />
      <ProtectedRoute
        path="/edit"
        auth={isLoggedIn}
        exact={true}
        component={Shell}
        edit={true}
      />
    </>
  ) : (
    <h1>Loading</h1>
  );
};
export default Routes;
