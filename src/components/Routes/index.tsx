import React from 'react';
import { Route } from 'react-router-dom';
import { ShellTypeProps, SignType } from '../../interfaces';
import Sign from '../Sign';
import Shell from '../Shell';

const Routes: React.FC = (): JSX.Element => (
  <>
    <Route
      path="/"
      exact={true}
      render={(props: SignType): any => <Sign {...props} signUp={true} />}
    />
    <Route
      path="/signin"
      exact={true}
      render={(props: SignType): any => <Sign {...props} />}
    />
    <Route
      path="/notes"
      exact={true}
      render={(props: ShellTypeProps): any => <Shell {...props} notes={true} />}
    />
  </>
);
export default Routes;
