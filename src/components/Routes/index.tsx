import React from 'react';
import { Route } from 'react-router-dom';
import Sign from '../Sign';
import Shell from '../Shell';

const Routes: React.FC = (): JSX.Element => (
  <>
    <Route path="/" exact={true} component={Sign} />
    <Route path="/notes" exact={true} component={Shell} />
  </>
);
export default Routes;
