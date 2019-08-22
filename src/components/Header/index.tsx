import React from 'react';
import Ibutton from '../elements/Ibutton';
import Styles from './index.module.css';

const Header: React.FC = (): JSX.Element => (
  <header>
    <div className={Styles.header}>
      <img src="assets/images/logo.svg" alt="logo" />
      <Ibutton sign={true}>Sign Out</Ibutton>
    </div>
  </header>
);
export default Header;
