import React from 'react';
import Ibutton from '../elements/Ibutton';
import Styles from './index.module.css';

const Footer: React.FC = (): JSX.Element => (
  <footer>
    <div className={Styles.footer}>
      <Ibutton circle={true}>+</Ibutton>
    </div>
  </footer>
);
export default Footer;
