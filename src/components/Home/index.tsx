import React from 'react';
import { Users } from '../../interfaces';
const Home: React.FC<Users> = (props: Users): JSX.Element => {
  const { name, email } = props;
  return <div>Welcome {name}</div>;
};

export default Home;
