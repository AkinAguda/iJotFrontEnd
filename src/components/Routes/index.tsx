import React from 'react';
import { Route } from 'react-router-dom';
import { ShellTypeProps } from '../../interfaces';
import Sign from '../Sign';
import Shell from '../Shell';

const Routes: React.FC = (): JSX.Element => (
  <>
    <Route path="/" exact={true} component={Sign} />
    <Route
      path="/notes"
      exact={true}
      render={(props: ShellTypeProps): any => <Shell {...props} notes={true} />}
    />
  </>
);
export default Routes;
